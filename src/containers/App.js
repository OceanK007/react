import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; // Can give any other name to default exports as well
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor() ', props);

    // If you have a constructor then initialize state inside constructor
    // Else if you don't have constructor, then initialize state anywhere else
    this.state = {
      persons: [
        { id: 1, name: 'Ocean', age: 28 },
        { id: 2, name: 'Sandeep', age: 28 },
        { id: 3, name: 'Ashutosh', age: 27 }
      ],
      showPersons: false
    } 
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  // // Initalize state in constructor if you have defined constructor
  // state = {
  //   persons: [
  //     { id: 1, name: 'Ocean', age: 28 },
  //     { id: 2, name: 'Sandeep', age: 28 },
  //     { id: 3, name: 'Ashutosh', age: 27 }
  //   ],
  //   showPersons: false
  // } 

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
    console.log('[App.js] inside render()');

    let persons = null;
    
    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }

    return ( 
      <div className={classes.App}>    
        <Cockpit 
          appTitle={this.props.title}  // this.props property coming from Component class
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}
        />    
        {persons}        
      </div>
    );
  }
}

export default App;
