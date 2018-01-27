const defaultState = {
    isLoggedIn: false,
}


const auth = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true, userId: action.user.uid, error: undefined }
        case 'LOGIN_HAS_FAILED':
            const { error } = action;
            return { ...state, isLoggedIn: false, error }
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, userId: undefined, error: undefined}
        default:
            return state;
    }
}
export default auth;