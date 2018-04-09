import React, { Component } from 'react';
import Header from '@/header';
import Input from '@/input';
class Login extends Component {
    constructor(props){
        super( props );
        this.state = {
            
        }
    }
    getValue = event => {
        console.log( event.target.value )
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
                        />
                        <Input 
                            type = "password" 
                            placeholder = "请输入用户名" 
                            icon = "icon-password"
                        />
                    </form>
                </div>
            </section>
            
            
        )
    }

}

export default Login ;