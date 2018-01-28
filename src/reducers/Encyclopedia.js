const defaultState = {
    isLoading: true,
    birds: []
}

const encyclopedia = (state = defaultState, action) => {
    switch(action.type) {
        case 'SAVE_ALL_BIRDS':
            return { ...state, isLoading: false, birds: action.payload }
        case 'SAVE_SELECTED_BIRD':
            return { ...state, isLoading: false, currentBird: action.payload }
        default:
            return state;
    }
}
export default encyclopedia;