/* index for reducers */

import {combineReducers} from 'redux';
import auth from './Auth';
import register from './Register';
import navReducer from './Navigation'
import user from './User'
import capture from './Capture'

const rootReducer = combineReducers({
    auth,
    register,
    user,
    capture,
    nav: navReducer,
    
});

export default rootReducer;