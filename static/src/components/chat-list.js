import React, { Component } from 'react';
import Avatar from '@/avatar';
import Badge from '@/badge';
class ChatList extends Component {
    constructor( props ){
        super( props );
        this.state = {}

    }
    render(){
        return(
            <section className = "list-container">
                <ul>
                    <li>
                        <Avatar src = "assets/images/a.jpg" className = "test" />
                        <section>
                            <p><strong>{ this.props.title }</strong></p>
                            <p>{ this.props.desc }</p>
                        </section>
                        {
                            this.props.number && <Badge number = { this.props.number } />
                        }
                    </li>
                </ul>
            </section>


        )
    }
}

export default ChatList;