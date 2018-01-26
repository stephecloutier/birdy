
const user = (state = null, action) => {
    switch(action.type) {
        case 'SAVE_USER_INFOS':
            const first_name = action.payload.first_name
            const last_name = action.payload.last_name
            return { ...state, first_name, last_name }
        default:
            return state;
    }
}
export default user;