import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: [
      {'username': 'Archie'}
    ]
  }

  stateHandler = (event) => {
    this.setState({ 
      username: [
      {'username': event.target.value}
    ]}
  );
  }

  render() {


    return (
      <div className="App">
        <UserInput oldName={this.state.username[0].username} change={this.stateHandler}></UserInput>
        <UserOutput username="Harry"></UserOutput>
        <UserOutput username="Meghan"></UserOutput>
        <UserOutput username={this.state.username[0].username}></UserOutput>
      </div>
    );
  }
}

export default App;
