import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';


export const createUser = ({email, password, first_name, last_name, isn}) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
            firebase.database().ref('users/' + response.uid).set({
                email: email,
                first_name: first_name,
                last_name: last_name,
                isn: isn,
            })
            return (
                dispatch(createUserSuccess(response)),
                dispatch(NavigationActions.navigate({ routeName: 'DrawerStack' }))
            )
        }) 
        .catch((error) => {
            return disptach(createUserFail(error));
        });
}

export const createUserSuccess = (response) => {
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