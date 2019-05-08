import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working!</p>
        <Person name="Marcos" age="45"/>
        <Person name="Augusto" age="44">My Hobbies: Racing</Person>
        <Person name="Lu" age="43"/>
      </div>
    );
  }
}

export default App;
