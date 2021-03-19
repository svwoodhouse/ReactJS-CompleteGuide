import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: 'Max', age: 28 },
      { id: "vasdf1", name: 'Manu', age: 29 },
      { id: "asdf11",  name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: false
  };
  
  deletepersonHandler = (personIndex) => {
    // same thing
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    });
    const person = {...this.state.persons[personIndex]}
    //same thing
    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState( {persons: persons} );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletepersonHandler(index)}
                name = {person.name}
                age = {person.age} 
                key = {person.id}
                changed = {(event) => this.nameChangeHandler(event, person.id)} />
          })}
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          onClick={this.togglePersonHandler}
          style={style}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}
export default Radium(App);
