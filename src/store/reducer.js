import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
            return {
                ...state,
                counter: state.counter + 1
            };

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // use .concat(), since .push() manipulates the original array
                // whereas .concat() returns a new array (old array + new element added)
                // Arrays are passed-by-reference, so we must always use .concat() to 
                // manipulate arrays in immutable way
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        case actionTypes.DELETE_RESULT:
            // Approach 1: Using .splice()
            // const newArray = [...state.results];
            // newArray.splice(action.resultElId, 1)

            // Approach 2: Using .filter() method
            const newArray = state.results.filter(result => result.id !== action.resultElId);

            return {
                ...state,
                results: newArray
            }
    }
    return state;
}

export default reducer;