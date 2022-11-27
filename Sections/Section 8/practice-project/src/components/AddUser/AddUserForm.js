import { useState } from "react"

const AddUserForm = (props) => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    
    const usernameHandler = (event) => {
      setUsername(event.target.value)
  }
  
  const ageHandler = (event) => {
      setAge(event.target.value)
  }
  
    const onSubmitHandler = (event) => {
      event.preventDefault();
      console.log(age," ", username)
      const userData = {
        username: username, 
        age: age,
        id: Math.random().toString()
    }
      props.testUserData(userData)
      setAge('')
      setUsername('')
  }
    return(
        <form onSubmit={onSubmitHandler}>
            <label>Username</label>
            <input type='text' value={username} onChange={usernameHandler}></input>
            <label>Age (Years)</label>
            <input type="number" value={age} min='1' onChange={ageHandler}></input>
            <input type="submit" value="Add User"></input>
        </form>
    )
}

export default AddUserForm