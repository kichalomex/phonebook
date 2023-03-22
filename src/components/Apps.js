import React, {useState, useEffect} from "react"
import { Header } from "./Header"
import { Filter } from "./FIlter"
import { PersonForm } from "./PersonForm"
import { Persons } from "./Persons"
import Services from "./Services"

const App = () => {
    const [ persons, setPersons ] = useState ([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ searchName, setSearchName] = useState('')

    useEffect(() =>{
        console.log('Entro al Effect');
        Services
            .getAll()
            .then(data => {
                console.log('Entro al then');
                setPersons(data)
            })
    },[])
    console.log('render',persons.length,'person');

    const handleSubmit = (event) =>{
        event.preventDefault()
        
        const persons_names = persons.map(person => person.name)

        if (persons_names.includes(newName)) {
            alert(`${newName} is already added to phoneBook.`)
        }
        else {
            const newObject = { 
                'name': newName, 
                'number': newNumber
            }
            Services
                .create(newObject)
                .then(data => 
                    setPersons(persons.concat(newObject)))
                    setNewName('')
        }
    }
    return (
        <div>
            <Header name={'Phonebook'}/>
            <Filter searchName={searchName} 
            setSearchName={setSearchName}/>
            <div></div>
            <div>
            <Header name={'Add a new'}/>
            <PersonForm handleSubmit={handleSubmit} 
            newName={newName} setNewName={setNewName} 
            newNumber={newNumber} setNewNumber={setNewNumber}/>
            </div>
            <div>
            <Header name={'Numbers'}/>
            <Persons persons={persons} searchName={searchName}/>
            </div>
        </div>
        
    )
  }

  export default App