const capture = (state = null, action) => {
    switch(action.type) {
        case 'START_CAPTURE':
            return { ...state }
        case 'SAVE_BIRD':
            return { ...state }
        default:
            return state;
    }
}
export default capture;