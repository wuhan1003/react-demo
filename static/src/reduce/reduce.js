import { combineReducers } from 'redux';
const reducer = (state = {},action)=>{
    switch(action.type){
        case "LOGIN_STATE":
            return Object.assign({},state,{loginStatus:action.status});
            // break;
        default:
            return state;    
    }
}
const test = (state = {},action) =>{

    switch(action.type){
        case "TEST":
            return {test:'测试redux'};
        default :
            return state;
    }
}
const reduces = combineReducers({reducer,test});
export default  reduces;