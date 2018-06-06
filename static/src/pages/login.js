import React, { Component } from 'react';
import Header from '@/header';
import Input from '@/input';
import Button from '@/buttons';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN_STATE } from '../reduce/actions';
// axios.interceptors.request.use(
//     config=>{console.log(config);
//     return config;  //不加这句会报错
// },
//     err=>Promise.reject(err)
// );
const qs = require('querystring');
class Login extends Component {
    constructor(props){
        super( props );
        this.state = {
            username:'',
            password:'',
            loginState:this.props.Login
        }
    }
    componentWillMount(){
        const { history } = this.props;
        if(sessionStorage.getItem('LoginStatus') === 'true'){
            history.replace('/chat');
        }
    }
    componentDidMount(){
        // console.log(this.state.loginState)
    }
    getValue = ( e, state) => {
        this.setState({
            [state]:e.target.value
        })
    }
    blur = event =>{
        console.log( event.target.value )
    }
    getFocus = (event) =>{
        event.stopPropagation();      
        event.preventDefault();
        this.userName.input.focus();
        
    }
    testAjax = event => { 
        event.stopPropagation();      
        event.preventDefault();
        const params = {
            username: this.state.username,
            password: this.state.password
        }

        const { changeLogin,history } = this.props;

        axios({
            url:'./api/sign',
            method:'post',
            data:qs.stringify(params)
        }).then(res=>{
            if(res.data.code === 0){
                
                changeLogin(LOGIN_STATE);
                this.setState({loginState:this.props.Login});
                history.replace('/chat');

            }
            
        }).catch(err=>console.log(err))

    }
    render(){
        return (
            <section>
                <Header title = "用户登陆" { ...this.props } />
                <div className = "form-container">
                    <form >
                        <Input 
                            type = "text" 
                            placeholder = "请输入用户名" 
                            icon = "icon-account"
                            onChange = { e => { this.getValue(e,'username') } }
                            // onBlur = { this.blur }
                            ref = { input => this.userName = input }
                            tips = "请输入用户名"
                            pattern = { /\w/ }
                        />
                        <Input 
                            type = "password" 
                            placeholder = "请输入用户名" 
                            icon = "icon-password"
                            onChange = {e=>{this.getValue(e,'password')}}
                        />
                        <section className = "form-footer">
                            <Button value = "登录" size = "large" onClick = { this.testAjax } />
                        </section>     
                    </form>
                </div>
                <div>{this.state.loginState.toString()}</div>
            </section>
            
            
        )
    }

}


const mapStateToProps = (state,ownprops)=>{
    return state.login;
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        changeLogin:status=>dispatch(status)
    }
}
Login = connect(mapStateToProps,mapDispatchToProps)(Login);


export default Login;