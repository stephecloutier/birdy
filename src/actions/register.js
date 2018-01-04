import * as firebase from 'firebase';

export const createUser = (email, password) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
        return dispatch(createUserSuccess(response));
    }) 
    .catch((error) => {
        return disptach(createUserFail(error));
    });
}

export const createUserSuccess = (resonse) => {
    return {
        type: 'CREATE_USER_SUCCESS',
        user: response,
    }
}

export const createUserFail = (error) => {
    return {
        type: 'CREATE_USER_FAIL',
        error
    }
}