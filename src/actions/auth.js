import * as firebase from 'firebase';

export const loginUser = (email, password) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            return dispatch(loginUserSuccess(response));
        })
        .catch((error) => dispatch(loginUserFail));
}

export const loginUserSuccess = (response) => {
    return {
        type: 'LOGIN',
        user: response,
        isLoggedIn: true,
    }
}

export const loginUserFail = (error) => {
    return {
        type: 'LOGIN_HAS_FAILED',
        error
    }
}



// user creation actions:
/*
export const createUser = (email, pass) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((resp) => {
        return dispatch(createUserSuccess(resp));
    }) 
    .catch((error) => disptach(createUserFail));
}
export const createUserSuccess = (resp) => {
    return {
        type: CREATE_USER_SUCCESS,
        user: resp,
    }
}

export const createUserFail = (error) => {
    return {
        type: CREATE_USER_FAIL,
        error
    }
}
*/