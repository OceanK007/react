import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; // Can give any other name to default exports as well
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
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
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    } 
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  // If we are using Pure component then no need to implement shouldComponentUpdate() method
  // Since it automatically checks if anything changed in state using shallow copy. and 
  // If nothing has changed then it won't proceed further

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate() ', nextProps, nextState);
  //   //return true;    // Continue the updating process
  //   //return false;   // Stop the further updating process

  //   // We must return true only when something has changed in state, since if you return true
  //   // everytime, then it will render DOM again and this will be performance issue if 
  //   // DOM is refreshed even nothing has changed.
  //   return nextState.persons !== this.state.persons ||
  //          nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate() ', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate()');
  }


  // // Initalize state in constructor if you have defined constructor
  // state = {
  //   persons: [
  //     { id: 1, name: 'Ocean', age: 28 },
  //     { id: 2, name: 'Sandeep', age: 28 },
  //     { id: 3, name: 'Ashutosh', age: 27 }
  //   ],
  //   showPersons: false,
  //   toggleClicked: 0,
  //   authenticated: false
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
    this.setState((prevState, props) => { // Using setState in better approach
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
      <Aux>   
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}  // this.props property coming from Component class
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}
        />    
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
