import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor() ', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()');
        this.lastPersonRef.current.focusIt();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps() ', nextProps);
    }

    
    // If we are using Pure component then no need to implement shouldComponentUpdate() method
    // Since it automatically checks if anything changed in state using shallow copy. and 
    // If nothing has changed then it won't proceed further

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] inside shouldComponentUpdate() ', nextProps, nextState);
    //     //return true;    // Continue the updating process
    //     //return false;   // Stop the further updating process
        
    //     // We must return true only when something has changed in state, since if you return true
    //     // everytime, then it will render DOM again and this will be performance issue if 
    //     // DOM is refreshed even nothing has changed.
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    // }
    
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
                position={index}
                click={() => this.props.clicked(index)} 
                age={person.age} 
                key={person.id} 
                ref={this.lastPersonRef}
                changed={(event) => this.props.changed(event, person.id)} />
            });
    }
}

export default Persons;