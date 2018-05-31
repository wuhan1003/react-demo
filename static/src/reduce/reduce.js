import { combineReducers } from 'redux';
const login = (state = {'Login':false},action)=>{
    switch(action.type){
        case "LOGIN_STATE":
            console.log(`change login`);
            sessionStorage.setItem('LoginStatus','true');
            return Object.assign({},state,{Login:action.status});
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
const reduces = combineReducers({login,test});
export default  reduces;