import React, { useState, useEffect } from 'react'
import AddNewSection from "./Components/AddNewSection"
import NumbersSection from "./Components/NumbersSection"
import SearchSection from "./Components/SearchSection"
import serverServices from "./services/server"
import Message from "./Components/Message"
import ErrorMessage from "./Components/ErrorMessage"





const App = () => {
  
  const [persons, setPersons] = useState([])

  const handleFetch = () => {
    serverServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })

    }

  useEffect(handleFetch, [])

  


  // SEARCHSECTION:

  var [matchingPersons, setMatchingPersons] = useState([])

  var [showAll, setShowAll] = useState(true)

  var search;

  const [searching, setSearching] = useState("")
  
  const handleChangeSearch = (event) => {
    event.preventDefault()
    search = event.target.value
    setShowAll(search === "" ? true : false)

    setSearching(search)

    setMatchingPersons(persons.filter(person => 
      person.name.toLowerCase().includes(search.toLowerCase())
    ))
  }

  // ADDNEWSECTION: 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ addedMessage, setAddedMessage] = useState(null)
  const [ errorMessage, setErrorMessage] = useState(null)
  
  const handleAddNew = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name === newName)
    if (persons.map(person => person.name).includes(newName) 
      && persons.map(person => person.number).includes(newNumber) === false) {
      const personToAdd = {
        name: newName,
        number: newNumber
      }
      const acceptedConfirm = () => {        
        serverServices
          .update(person.id, personToAdd)
          .then(returnedPerson => {
              console.log(returnedPerson)
              serverServices
                .getAll()
                .then(people => 
                    setPersons(people),
                    setAddedMessage(`${personToAdd.name}'s number has been updated to: ${personToAdd.number}`),
                    setTimeout(() => setAddedMessage(null), 3000)
                )
          
              
          }
              )
          .catch(error =>
            setErrorMessage(`'${personToAdd.name}' has been recently deleted`),
            setTimeout( () => setErrorMessage(null), 3000))
      }
      if (window.confirm(
        `${person.name} already exists, do you want to update it?`
        )) {
        acceptedConfirm()
      }
    
    
    }else if (persons.map(person => person.name).includes(newName) 
    && persons.map(person => person.number).includes(newNumber) === true) {
      window.alert(`${person.name} is already included with number: ${person.number}`)
    }else {
      const personToAdd = {
        name: newName,
        number: newNumber
      }
      setNewName('')
      setNewNumber('')
      serverServices
        .create(personToAdd)
        .then(returnedPerson =>
          setPersons(persons.concat(returnedPerson)),
          console.log(personToAdd),
          setAddedMessage(`${personToAdd.name} has been added`),
          setTimeout(() => setAddedMessage(null), 3000)
          )
      
      }
    }


  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }


  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }


  // NUMBERSECTION:


  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)
    
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      serverServices
      .deletePerson(person.id, person)
      .then(
        console.log(`${person.name} has been deleted`,),
        setPersons(persons.filter(person => person.id !== id))  
      )
    }
  }
  const whatShow = showAll 
        ? persons
        : matchingPersons
  

  const propsForAddNewSection = [
    newNumber, newName, handleChangeName, handleChangeNumber, handleAddNew
  ]

  const propsForNumbers = [
    whatShow, handleDelete
  ]

  const propsForSearch = [
    searching, handleChangeSearch
  ]

  return (
    <div>
      <h1>Phonebook</h1>
      <Message addedMessage={addedMessage} />
      <ErrorMessage errorMessage={errorMessage} />
      <SearchSection propsForSearch={propsForSearch} />
      <AddNewSection propsForAddNewSection={propsForAddNewSection} />
      <NumbersSection propsForNumbers={propsForNumbers} />
    </div>
    
  )
}

export default App
