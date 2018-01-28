/* index for reducers */

import {combineReducers} from 'redux';
import auth from './Auth';
import register from './Register';
import navReducer from './Navigation'
import user from './User'
import capture from './Capture'
import encyclopedia from './Encyclopedia'

const rootReducer = combineReducers({
    auth,
    register,
    user,
    capture,
    encyclopedia,
    nav: navReducer,
    
});

export default rootReducer;