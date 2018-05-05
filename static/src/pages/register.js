import React, { Component } from 'react';
import Header from '@/header';
import Input from '@/input';
import Button from '@/buttons';
import axios from 'axios';
const qs = require('querystring');
class Register extends Component {
    constructor( props ){
        super( props );
        this.state = {
            // userName : '',
            // password : '',
            // email : ''
        }
    }
    register = ( e ) => {

        axios({
            url:'./api/register',
            method:'post',
            data:qs.stringify(this.state)
        }).then(res=>{
            console.log(res)
        }).catch(err=>console.log(err))



        // let formData = new FormData(this.f);

    }
    getUserInfo = ( e ) => {
        console.log( e.target.name );
        
    }
    getValue = (e,state) => {
        this.setState({[state]:e.target.value})
    }
    render(){
        return(

            <section>
                <Header title ="用户注册" { ...this.props } />
                <form className = "form-container" name = "register" ref = { ref => this.f = ref} >
                    <Input 
                        placeholder = "请输入用户名" 
                        name = "userName" 
                        icon = "icon-account" 
                        onChange = { e => this.getValue(e,'userName') } />
                    <Input 
                        type = "password"
                        placeholder = "请输入密码"
                        name = 'password'
                        onChange = { e => this.getValue(e,'password') } 
                        icon = "icon-password" />
                    <Input 
                        placeholder = "请输入邮箱" 
                        name = "email"
                        onChange = { e => this.getValue(e,'email') } 
                        icon = "icon-email" />
                    <section className = "form-footer">
                        <Button value = "注册" size = "large" onClick = { this.register } />
                    </section>  
                </form>
            </section>
        )
    }
}
export default Register;