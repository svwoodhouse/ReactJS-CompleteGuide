import Card from "../UI/Card";
import styles from './AddUsers.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";
const AddUsers = (props) => {
const [enteredUsername, setEnteredUsername] = useState('')
const [enteredAge, setEnteredAge] = useState('')
const [error, setError] = useState();

const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title:'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
        })
        return;
    }
    if(+enteredAge < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).'
        })
        return 
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredAge('')
    setEnteredUsername('')
}


const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
}

const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
}

const errorHandler = () => {
    setError(null);
}

return (
    <div>    
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label>Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add Users</Button>
            </form>
        </Card>
    </div>
)
}

export default AddUsers