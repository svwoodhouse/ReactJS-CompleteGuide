import { useState } from 'react'
import Card from '../UI/Card'
import AddUserForm from './AddUserForm'
const AddUser = (props) => {
const [isValid, setIsValid] = useState(true)
const testUserData = (userData) => {
    if(userData.age === null || userData.username === '')
    {
        setIsValid(!isValid)
    }
    else{
        props.saveUserData(userData)
    }
}
return (
    <Card>
        <AddUserForm testUserData={testUserData} />
        {
            !isValid && <Card>
                <h1>Invalid Input</h1>
                <p>Please Enter a valid name and age (non -empty values).</p>
                <button onClick={(event) => {setIsValid(!isValid)}}>Okay</button>
            </Card>
        }
    </Card>
    )
}
export default AddUser