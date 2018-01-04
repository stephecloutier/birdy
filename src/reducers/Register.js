const defaultState = {
    isLoggedIn: false,
}


const auth = (state = defaultState, action) => {
    switch(action.type) {
        case 'CREATE_USER_SUCCESS':
            const { user: { uid: userId} } = action;
            return { ...state, isLoggedIn: true, userId }
        case 'CREATE_USER_FAILED':
            const { error } = action;
            return { ...state, isLoggedIn: false, error }
        default:
            return state;
    }
}
export default auth;