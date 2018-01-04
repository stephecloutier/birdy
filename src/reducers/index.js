/* index for reducers */

import {combineReducers} from 'redux';
import auth from './Auth';
import register from './Register';
import navReducer from './Navigation'

const rootReducer = combineReducers({
    auth,
    register,
    nav: navReducer,
});

export default rootReducer;