import React from 'react';
import Radium from 'radium';
 // Due to webpack, we can import css into js file
 // But it won't be bundled together, .css will be bundled separately
import './Person.css'; 

const person = (props) => {
    const style = {
        // Using radium functionality
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Radium(person);