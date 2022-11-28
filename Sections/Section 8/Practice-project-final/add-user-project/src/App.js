import { useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {return [...prevUsersList, {name:uName, age: uAge, id:Math.random().toString()}]})
  }
  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
