import React, { useState, useEffect } from 'react'
import AddNewSection from "./Components/AddNewSection"
import NumbersSection from "./Components/NumbersSection"
import SearchSection from "./Components/SearchSection"

import axios from "axios"








const App = () => {
  
  const [persons, setPersons] = useState([])

  const handleFetch = () => {
    console.log("start fetching")
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
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
