import AppNavigation from "../navigators/AppNavigation";

/*
const initialState = SignedOutNav.router.getStateForAction(
    SignedOutNav.router.getActionForPathAndParams('LoginStack')
);*/

const navReducer = (state, action) => {
    const newState = AppNavigation.router.getStateForAction(action, state)
    return newState || state
}

export default navReducer;