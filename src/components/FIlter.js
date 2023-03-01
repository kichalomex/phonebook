import { handleChange } from "./HandleChange"
const Filter = (props) => {
    const { searchName, setSearchName} = props

    return (
        <div>
            filter shown with: <input value={searchName} 
            onChange={handleChange(setSearchName)}/>
        </div>
    )
}
export {Filter}