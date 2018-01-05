const defaultState = {
    isLoggedIn: false,
}


const register = (state = defaultState, action) => {
    switch(action.type) {
        case 'CREATE_USER_SUCCESS':
            const { user: { uid: userId} } = action;
            return { ...state, isLoggedIn: true, userId }
        case 'CREATE_USER_FAIL':
            const { error } = action;
            return { ...state, isLoggedIn: false, error }
        case 'VALIDATE_USER_FAIL':
            const { errorList } = action;
            return { ...state, isLoggedIn: false, errorList }
        default:
            return state;
    }
}
export default register;