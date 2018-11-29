import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // Can give any other name as well

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Ocean', age: 28 },
      { id: 2, name: 'Sandeep', age: 28 },
      { id: 3, name: 'Ashutosh', age: 27 }
    ],
    showPersons: false
  } 

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]}; // Copying the person
    person.name = event.target.value; // setting value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // to copy
    const persons = [...this.state.persons];  // to copy
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // It's hard to use hovering styles while using inline styling
    // We can use Radium to apply hovering styles
    const style = {
      // javascript properties
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    name={person.name} 
                    age={person.age} 
                    click={() => this.deletePersonHandler(index)} 
                    key={person.id} 
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];    
    if(this.state.persons.length <= 2) {
      classes.push('red');  // classes = ['red'];
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    // .join(' ') : to convert array to string with space between elements 'red bold'
    return ( 
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* It must not be used, since it creates performance issues, use .bind() instead */}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}        
      </div>
    );
  }
}

export default App;
