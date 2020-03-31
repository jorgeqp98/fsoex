import React, { useState } from 'react'
import AddNewSection from "./Components/AddNewSection"
import NumbersSection from "./Components/NumbersSection"
import SearchSection from "./Components/SearchSection"








const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "654-738-745" },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  
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

    setMatchingPersons(persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())))
    
  }

  // ADDNEWSECTION: 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  
  const handleAddNew = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName.trim())) {
      window.alert(`"${newName.trim()}" is already in the phonebook`)
    }else {
      const personToAdd = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personToAdd))
      setNewName('')
      setNewNumber('')
      }
    }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  // NUMBERSECTION:

  const whatShow = showAll 
        ? persons
        : matchingPersons

  

  console.log("search:",search)

  console.log("showAll:", showAll)

  console.log('matchingPersons:', matchingPersons)
  

 

  const propsForAddNewSection = [
    newNumber, newName, handleChangeName, handleChangeNumber, handleAddNew
  ]

  const propsForNumbers = [
    whatShow
  ]

  const propsForSearch = [
    searching, handleChangeSearch
  ]

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchSection propsForSearch={propsForSearch} />
      <AddNewSection propsForAddNewSection={propsForAddNewSection} />
      <NumbersSection propsForNumbers={propsForNumbers} />
    </div>
    
  )
}

export default App
