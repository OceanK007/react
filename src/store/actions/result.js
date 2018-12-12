import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    // We can modify the data here // NOT Recommended place
    // Reducers is the recommended place to modify data
    //const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}
export const storeResult = (res) => {
    // Using timout to fake server call
    // redux-thunk will act as middleware 
    // dispatch() will be called by redux-thunk
    // and wait for response
    return (dispatch, getState) => {
        setTimeout(() => {
            // const counterValue = getState().ctr.counter;
            // console.log(counterValue);

            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};
