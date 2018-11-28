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
  switchNameHandler = (newName) => {
    // console.log("Clicked");
    
    // We can't change state directly like this
    // this.state.persons[0].name = 'Life'; // DON'T DO THIS

    // setState just merges the differences, it doesn't replace whole state
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Sandeep', age: 28 },
        { name: 'Ashutosh', age: 28 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ocean', age: 28 },
        { name: event.target.value, age: 28 },
        { name: 'Ashutosh', age: 27 }
      ]
    });
  }

  render() {
    // It's hard to use hovering styles while using inline styling
    const style = {
      // javascript properties
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* It must not be used, since it creates performance issues, use .bind() instead */}
        <button style={style} onClick={() => this.switchNameHandler('Life')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        // Best way is to use .bind()
        clickit={this.switchNameHandler.bind(this, 'Ocean!!!')}
        changed={this.nameChangedHandler}>My Hobbies: Gaming</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
