import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';


const validateUser = (email, password, first_name, last_name, isn) => {
    errorList = []
    if(!isn) {
        errorList.push('Vous devez fournir un numéro isn')
    } else if(!isn.match(/^[a-zA-Z]{2}[0-9]{2}[a-zA-Z]{2}$/)) {
        errorList.push('Le numéro isn que vous avez entré n\'est pas valide. Il doit suivre le format AA11AA')
    }
    if(!first_name) errorList.push('Vous devez fournir un prénom')
    if(!last_name) errorList.push('Vous devez fournir un nom')
    if(!password) errorList.push('Vous devez fournir un mot de passe')
    if(!email) errorList.push('Vous devez fournir une adresse email')
    

    return errorList;
}

export const createUser = ({email, password, first_name, last_name, isn}) => dispatch => {
    let validationErrors = validateUser(email, password, first_name, last_name, isn);
    if(validationErrors) {
        return dispatch(validateUserFail(validationErrors));
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
            firebase.database().ref('users/' + response.uid).set({
                email: email,
                first_name: first_name,
                last_name: last_name,
                isn: isn,
            })
            .catch((error) => {
                return dispatch(createUserFail(error));
            });
            return (
                dispatch(createUserSuccess(response)),
                dispatch(NavigationActions.navigate({ routeName: 'DrawerStack' }))
            )
        }) 
        .catch((error) => {
            return dispatch(createUserFail(error));
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

export const validateUserFail = (errorList) => {
    return {
        type: 'VALIDATE_USER_FAIL',
        errorList
    }
}