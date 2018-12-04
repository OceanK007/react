import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {

        // Creating an array of size based on ingKey
        // _ to indicate then it's blank
        return [...Array(props.ingredients[ingKey])].map((_, i) => {    
            return <BurgerIngredient key={ingKey + i} type={ingKey} />
        });    
    }) 
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    //console.log(transformedIngredients);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;