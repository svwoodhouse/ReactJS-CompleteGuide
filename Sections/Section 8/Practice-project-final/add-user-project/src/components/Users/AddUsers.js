import Card from "../UI/Card";
import styles from './AddUsers.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState, useRef } from "react";
import WrapperComponent from "../Helpers/WrapperComponent";
const AddUsers = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const eneteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        if(eneteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title:'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if(+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return 
        }
        props.onAddUser(eneteredName, enteredUserAge)
        
        // Not recommended to manipulate the DOM but in this case its okay
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }


    const errorHandler = () => {
        setError(null);
    }

    return (
        <WrapperComponent>    
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={nameInputRef}/>
                    <label>Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add Users</Button>
                </form>
            </Card>
        </WrapperComponent>
    )
}

export default AddUsers