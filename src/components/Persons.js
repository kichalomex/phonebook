import { Person } from "./Person"

const Persons = (props) => {
  const { persons, searchName, setPersons } = props
    return(
      <div>
        <table>
          <tbody>
            {
                props.persons.map((element, key) =>{
                  if (searchName.length === 0 ||
                    element.name.search(searchName) !== -1){
                      return (
                        <Person key={element.name}  persons={persons} person={element} setPersons={setPersons}/>
                      )
                    }
                }
                )
            }
          </tbody>
        </table>
      </div>
   )
  }

  export { Persons }