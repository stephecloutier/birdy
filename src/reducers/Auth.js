const defaultState = {
    isLoggedIn: false,
}


const auth = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            const { user: { uid: userId} } = action;
            return { ...state, isLoggedIn: true, userId }
        case 'LOGIN_HAS_FAILED':
            const { error } = action;
            return { ...state, isLoggedIn: false, error }
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, userId: undefined}
        default:
            return state;
    }
}
export default auth;