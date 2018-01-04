
const navigator = (state = null, action) => {
    switch(action.type) {
        case 'TOGGLE_DRAWER':
            return { ...state, initialRoute: 'Home' };
        default:
            return state;
    }
}
export default navigator;