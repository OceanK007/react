import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utlility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            // Approach 1: To return state immutably
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;

            // Approach 2: To return state immutably
            // const newState = {...state};
            // newState.counter = state.counter + 1;
            // return newState;

            // Approach 3: Return a new object
            // This is bad approach, since we returning only particular property
            // return {
            //     counter: state.counter + 1
            // };     

            // Approach 4: Return state immutably

            return updateObject(state, {counter: state.counter + 1});
            // return {
            //     ...state,
            //     counter: state.counter + 1
            // };

        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // };
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value});
            // return {
            //     ...state,
            //     counter: state.counter + action.value
            // };
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
            // return {
            //     ...state,
            //     counter: state.counter - action.value
            // };
    }
    return state;
}

export default reducer;