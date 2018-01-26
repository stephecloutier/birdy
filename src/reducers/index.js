/* index for reducers */

import {combineReducers} from 'redux';
import auth from './Auth';
import register from './Register';
import navReducer from './Navigation'
import user from './User'

const rootReducer = combineReducers({
    auth,
    register,
    user,
    nav: navReducer,
    
});

export default rootReducer;