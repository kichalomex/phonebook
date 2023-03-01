import React, {useState} from "react"
import { handleChange } from "./HandleChange"
import { Persons } from "./Persons"

const App = (props) => {
    const [ persons, setPersons ] = useState (props.persons)
    const [ newName, setNewName ] = useState('')
    
    const handleSubmit = (event) =>{
      event.preventDefault()
  
      const newObject = { 'name': newName}
      setPersons(persons.concat(newObject))
      setNewName('')
    }
    return (
      <div>
        <Header name={'Phonebook'}/>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input values={newName} onChange=
            {handleChange(setNewName)}/>
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
        </form>
        <div>
          <Header name={'Numbers'}/>
          <Persons persons={persons}/>
        </div>
      </div>
      
    )
  }
  const Header = (props) => {
    return(
    <h2>{props.name}</h2>
    )
  }
  
  export default App