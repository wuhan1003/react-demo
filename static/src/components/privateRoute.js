import React, { Component } from 'react';
import { Route,Redirect } from 'react-router-dom';
class PrivateRoute extends Component {
    constructor( props ){
        super(props);
        this.state = {
            loginState : true
        }
    }
    componentWillMount(){
        const { history }  = this.props;
        // this.props.
        if(this.props.requireAuth){
            //未登录
            if(sessionStorage.getItem('LoginStatus') != 'true'){
                this.setState({loginState:false})
            }
        }
        
    }
    render(){
        return(
            this.state.loginState ?  <Route { ...this.props } /> : <Redirect to = '/login' /> 
        )
    }
}
export default PrivateRoute;