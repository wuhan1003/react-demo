import { combineReducers } from 'redux';
const LOGIN_STATE = 'LOGINSTATE';
const login_state = (state,action) => {
    switch(action.type){
        case LOGIN_STATE :
            return false;
        default :
            return true;
    }
}

const reduces = combineReducers({login_state});
export default  reduces;