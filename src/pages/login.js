import React, { Component } from 'react';
import Header from '@/header';
class Login extends Component {
    constructor(props){
        super( props );
        this.state = {
            
        }
    }
    
    render(){
        return (
            <section>
                
                <Header title = "用户登陆" {...this.props} />
                <div>
                    这是表单内容
                </div>
            </section>
            
            
        )
    }

}

export default Login ;