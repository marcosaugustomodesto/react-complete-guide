import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: '1234', name:'Max', age:28},
      {id: 'qwer', name:'Manu', age:29},
      {id: '4242', name:'Stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
             return <ErrorBoundary key={person.id}>
                        <Person
                          click={() => this.deletePersonHandler(index)}             
                          changed={(event) => this.nameChangedHandler(event, person.id)}
                          name={person.name} 
                          age={person.age} />
                    </ErrorBoundary>             
          })}
        </div>
      );
      style.backgroundColor = 'red';
    } 

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>this is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
          {persons}        
      </div>
    );
  }
}

export default App;
