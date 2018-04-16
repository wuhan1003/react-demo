import React,{ Component } from 'react';
import Header from '@/header';
class Chat extends Component {
    constructor( props ){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <section>
                <Header title = "好友列表" { ...this.props } />
            </section>
        )
    }
}
export default Chat;