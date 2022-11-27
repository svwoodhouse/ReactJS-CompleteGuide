import './App.css';
import { useState } from 'react';
import AddUser from './components/AddUser/AddUser'
import ShowUsers from './components/ShowUsers/ShowUsers';

function App() {
  const [userData, setUserData] = useState([]);

  const saveUserData = (data) => {
    setUserData((prevUserData)=> {return [data, ...prevUserData]})
    console.log(userData)
  }

  return (
    <div className="App">
      <AddUser saveUserData={saveUserData}/>
      <ShowUsers data={userData}/>
    </div>
  );
}

export default App;
