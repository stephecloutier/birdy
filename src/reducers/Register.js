const defaultState = {
    isLoggedIn: false,
}


const register = (state = defaultState, action) => {
    switch(action.type) {
        case 'CREATE_USER_SUCCESS':
            return { ...state, isLoggedIn: true, userId: action.user.uid }
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