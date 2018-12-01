import React, { Component } from 'react';
 // Due to webpack, we can import css into js file
 // But it won't be bundled together, .css will be bundled separately
import classes from './Person.css'; 
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor() ', props);
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
    }

    // When this component will be removed from DOM
    componentWillUnmount() {
        console.log('[REMOVED Person.js] inside componentWillUnmount()');
    }

    render() {
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);