import React, {useState, useEffect} from "react"
import { Header } from "./Header"
import { Filter } from "./FIlter"
import { PersonForm } from "./PersonForm"
import { Persons } from "./Persons"
import Services from "./Services"
import { Notification } from "./Notification"

const App = () => {
    const [ persons, setPersons ] = useState ([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ searchName, setSearchName ] = useState('')
    const [ message, setMessage ] = useState(null)
    const [ errorMessage, setErrorMessage ] = useState(null)

    const timer = 3000

    useEffect(() =>{
        //console.log('Entro al Effect');
        Services
            .getAll()
            .then(data => {
                //console.log('Entro al then');
                setPersons(data)
            })
    },[])
    //console.log('render',persons.length,'person');

    const handleSubmit = (event) =>{
        event.preventDefault()

        const persons_names = persons.map(person => person.name)
        const message = `${newName} is already added to phonebook, replace the old number with a new one?`
        console.log(`${newName} is already added to phonebook, replace the old number with a new one?`);
        const newObject = {
            'name': newName,
            'number': newNumber
        }

        if (persons_names.includes(newName) && window.confirm(message)) {
            const newObjectID = persons[persons_names.indexOf(newName)]['id']
            Services
                .update(newObjectID, newObject)
                .then(data => setPersons(persons.map(person => newObjectID !== person.id ? person : data)))
                .catch(error => { setErrorMessage(`Information of ${newName} has already been removed from server`) 
                console.log(`Information of ${newName} has already been removed from server`);
                    setTimeout(() => {setErrorMessage(null)}, 5000)
                })
            
            setMessage(`Added ${newName}`)
            console.log(`Added ${newName}`);
            setTimeout(() => {setMessage(null)}, timer)
        }
        else {
            Services
                .create(newObject)
                .then(data => 
                    setPersons(persons.concat(newObject)))
                    setNewName('')
                        
            setMessage(`Added ${newName}`)
            console.log(`Added ${newName}`);
            setTimeout(() => {setMessage(null)}, timer)
        }
    }
    return (
        <div>
            <Header name={'Phonebook'}/>
            {
                errorMessage &&
                <Notification message={errorMessage} error={true} />
            }
            {
                message &&
                <Notification message={message} />
            }
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
            <Persons persons={persons} searchName={searchName} setPersons={setPersons}/>
            </div>
        </div>
        
    )
  }

  export default App