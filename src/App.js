import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'; // Can give any other name as well
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClass = '';
    
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // Key must be always on the outer element
            // Using <ErrorBoundary> to wrap the content of component to handle errors
            return <ErrorBoundary key={person.id}> 
                      <Person 
                      name={person.name} 
                      age={person.age} 
                      click={() => this.deletePersonHandler(index)} 
                      changed={(event) => this.nameChangedHandler(event, person.id)} />
                    </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];    
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);  // classes = ['red'];
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    // .join(' ') : to convert array to string with space between elements 'red bold'
    return ( 
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {/* It must not be used, since it creates performance issues, use .bind() instead */}
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}        
      </div>
    );
  }
}

export default App;
