import SignedOutNav from "../navigators/SignedOutNav";

/*
const initialState = SignedOutNav.router.getStateForAction(
    SignedOutNav.router.getActionForPathAndParams('Login')
);*/

const navReducer = (state, action) => {
    const newState = SignedOutNav.router.getStateForAction(action, state)
    return newState || state
}

export default navReducer;