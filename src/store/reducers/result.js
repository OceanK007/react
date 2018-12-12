import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utlility';

const initialState = {
    results: []
}

const deleteResult = (state, action)  => {
    const newArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state,  {results: newArray});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            // We can modify the data here // Recommended place

            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
            // return {
            //     ...state,
            //     // use .concat(), since .push() manipulates the original array
            //     // whereas .concat() returns a new array (old array + new element added)
            //     // Arrays are passed-by-reference, so we must always use .concat() to 
            //     // manipulate arrays in immutable way
            //     results: state.results.concat({id: new Date(), value: action.result})
            // };
        case actionTypes.DELETE_RESULT:
            // Approach 1: Using .splice()
            // const newArray = [...state.results];
            // newArray.splice(action.resultElId, 1)

            // Approach 2: Using .filter() method
            // const newArray = state.results.filter(result => result.id !== action.resultElId);
            // return updateObject(state,  {results: newArray})

            // return {
            //     ...state,
            //     results: newArray
            // }
            return deleteResult(state, action);
    }
    return state;
}

export default reducer;