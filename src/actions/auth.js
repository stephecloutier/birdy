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