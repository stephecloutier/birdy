const capture = (state = null, action) => {
    switch(action.type) {
        case 'START_CAPTURE':
            return { ...state, captureHasStarted: true }
        case 'VALIDATE_CAPTURE_FAIL':
            const { errorList } = action;
            return { ...state, errorList }
        case 'SAVE_BIRD':
            return { ...state }
        default:
            return state;
    }
}
export default capture;