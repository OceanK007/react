import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor() ', props);
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps() ', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside shouldComponentUpdate() ', nextProps, nextState);
        //return true;    // Continue the updating process
        //return false;   // Stop the further updating process
        
        return nextProps.persons !== this.props.persons;
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside componentWillUpdate() ', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] inside componentDidUpdate()');
    }

    render() {
        console.log('[Persons.js] inside render()');
        return this.props.persons.map((person, index) => {
            return <Person 
                name={person.name} 
                age={person.age} 
                click={() => this.props.clicked(index)} 
                key={person.id} 
                changed={(event) => this.props.changed(event, person.id)} />
            });
    }
}

export default Persons;