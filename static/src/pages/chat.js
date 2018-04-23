import React,{ Component } from 'react';
import Header from '@/header';
import Badge from '@/badge';
import ChatList from '@/chat-list';
class Chat extends Component {
    constructor( props ){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <section>
                <Header title = "好友列表" { ...this.props } />
                <ChatList data = { this.state.listData } />
            </section>
        )
    }
}
export default Chat;