import Services from "./Services"

const Person = (props) => {
    const {persons, person, setPersons} = props

    const handle = () => {
      const message = `Delete ${person.name}`
      if (window.confirm(message)) {
        Services.delete(person.id)
        setPersons(persons.filter(p => person.id !== p.id))
      }
    }

    return(
      <tr>
        <td>{person.name}</td>
        <td>{person.number}</td>
        <td><button onClick={handle}>Delete</button></td>
      </tr>
    )
  }
  export { Person }