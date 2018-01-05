import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';

export const loginUser = (email, password) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            return (
                dispatch(loginUserSuccess(response)),
                dispatch(NavigationActions.navigate({ routeName: 'DrawerStack' }))
            );
        })
        .catch((error) => {
            return dispatch(loginUserFail(error));
        })
}

export const loginUserSuccess = (response) => {
    return {
        type: 'LOGIN',
        user: response,
    }
}

export const loginUserFail = (error) => {
    return {
        type: 'LOGIN_HAS_FAILED',
        error
    }
}