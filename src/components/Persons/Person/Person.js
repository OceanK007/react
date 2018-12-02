import React, { Component } from 'react';
import PropTypes from 'prop-types';
 // Due to webpack, we can import css into js file
 // But it won't be bundled together, .css will be bundled separately
import classes from './Person.css'; 
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor() ', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }

    // Will be called after render() method
    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
        // Make the first element to be focused when "Toggle Persons" button is clicked
        if(this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    // When this component will be removed from DOM
    componentWillUnmount() {
        console.log('[REMOVED Person.js] inside componentWillUnmount()');
    }

    focusIt() {
        console.log("Focussing......")
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        );
    }
}

// Assigning propTypes here
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);