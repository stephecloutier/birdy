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
        type: LOGIN,
        user: response,
    }
}

export const loginUserFail = (error) => {
    return {
        type: LOGIN_HAS_FAILED,
        error
    }
}


/*
firebase.auth().signInWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .then(console.log('allo tu es connecté virtuellement par mon cerveau'))
                .catch(()=>{
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginCreation.bind(this))
                        .catch(this.onLoginFail.bind(this));
                });
*/

// user creation actions:

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


// other tutorial, connection without firebase

/*
export const login = (email, password) => {
    return {
        type: 'LOGIN',
        email: email,
        password: password
    };
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export const signup = (email, password) => {
    return (dispatch) => {

    };
}
*/