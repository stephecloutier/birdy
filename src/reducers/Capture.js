const defaultState = {
    captureHasStarted: false,
    birds: []
}

const capture = (state = defaultState, action) => {
    switch(action.type) {
        case 'START_CAPTURE':
            return { ...state, captureHasStarted: true, captureId: action.payload }
        case 'VALIDATE_FAIL':
            const { errorList } = action;
            return { ...state, errorList }
        case 'SAVE_BIRD':
            return { ...state, birds: state.birds.concat([action.payload]) }
        case 'UPDATE_BIRD':
            return { ...state }
        case 'SAVE_USER_BIRDS':
            return { ...state, userBirds: action.payload, isLoading: false }
        default:
            return state;
    }
}
export default capture;