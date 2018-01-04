const defaultState = {
    isLoggedIn: false,
}

const navigator = (state = defaultState, action) => {
    switch(action.type) {
        case 'GET_INITIAL_ROUTE':
            if(state.isLoggedIn) {
                return { ...state, initialRoute: 'Home' };
            } else {
                return { ...state, initialRoute: 'Login' };
            }
        default:
            return state;
    }
}
export default navigator;