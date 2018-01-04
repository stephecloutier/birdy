import LoginStack from "../navigators/LoginStack";

/*
const initialState = SignedOutNav.router.getStateForAction(
    SignedOutNav.router.getActionForPathAndParams('Login')
);*/

const navReducer = (state, action) => {
    const newState = LoginStack.router.getStateForAction(action, state)
    return newState || state
}

export default navReducer;