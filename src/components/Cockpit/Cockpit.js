import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];    
    let btnClass = classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);  // classes = ['red'];
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>{props.appTitle}</h1>
            {/* // .join(' ') : to convert array to string with space between elements 'red bold' */}
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            {/* It must not be used, since it creates performance issues, use .bind() instead */}
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;