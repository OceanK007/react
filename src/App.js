import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // Can give any other name as well

class App extends Component {
  state = {
    persons: [
      { name: 'Ocean', age: 28 },
      { name: 'Sandeep', age: 28 },
      { name: 'Ashutosh', age: 27 }
    ]
  }

  // Add "Handler" at end to indicate that it's used by event handlers
  // You can define any name though
  switchNameHandler = () => {
    console.log("Clicked");
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Gaming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
