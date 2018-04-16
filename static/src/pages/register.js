import React, { Component } from 'react';
import Header from '@/header';
import Input from '@/input';
import Button from '@/buttons';
class Register extends Component {
    constructor( props ){
        super( props );
        this.state = {

        }
    }
    render(){
        return(
            <section>
                <Header title ="用户注册" { ...this.props } />
                <form className = "form-container">
                    <Input placeholder = "请输入用户名" icon = "icon-account" />
                    <Input type = "password" placeholder = "请输入密码" icon = "icon-password" />
                    <Input type = "password" placeholder = "请确认密码" icon = "icon-password" />
                    <Input placeholder = "请输入邮箱" icon = "icon-email" />
                    <section className = "form-footer">
                        <Button value = "注册" size = "large" />
                    </section>  
                </form>
            </section>
        )
    }
}
export default Register;