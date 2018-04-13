import React, { Component } from 'react';
import Header from '@/header';
import Input from '@/input';
import Button from '@/buttons';

class Login extends Component {
    constructor(props){
        super( props );
        this.state = {
            
        }
    }
    // getValue = event => {
    //     console.log( event.target )
    //     console.log( event.target.value )
    // }
    blur = event =>{
        console.log( event.target.value )
    }
    getFocus = (event) =>{
        event.stopPropagation();      
        event.preventDefault();
        this.userName.input.focus();
        
    }
    render(){
        return (
            <section>
                <Header title = "用户登陆" {...this.props} />
                <div className = "form-container">
                    <form >
                        <Input 
                            type = "text" 
                            placeholder = "请输入用户名" 
                            icon = "icon-account"
                            onChange = { this.getValue }
                            onBlur = { this.blur }
                            ref = { input => this.userName = input }
                            tips = "请输入用户名"
                            pattern = { /\d/ }
                        />
                        <Input 
                            type = "password" 
                            placeholder = "请输入用户名" 
                            icon = "icon-password"
                        />
                        <section className = "form-footer">
                            <Button value = "登录" size = "large" />
                        </section>     
                    </form>
                </div>
            </section>
            
            
        )
    }

}

export default Login ;