import React, { Component } from 'react';
import Header from '@/header';
import Input from '@/input';
import Button from '@/buttons';
import axios from 'axios';
import { connect } from 'react-redux';
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
        console.log(this.props);
    }
    componentDidMount(){
        console.log(this.state.loginState)
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



        axios({
            url:'./api/sign',
            method:'post',
            data:qs.stringify(params)
        }).then(res=>{
            if(res.data.data.code === 0){

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

Login = connect(mapStateToProps)(Login);


export default Login;