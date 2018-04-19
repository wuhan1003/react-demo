import React, { Component } from 'react';
import Avatar from '@/avatar';
class ChatList extends Component {
    constructor( props ){
        super( props );
        this.state = {}

    }
    render(){
        return(
            <section>
                <ul>
                    <li>
                        <Avatar />
                        <section>
                            <p><strong></strong></p>
                            <p></p>
                        </section>
                        <Badge />
                    </li>
                </ul>
            </section>


        )
    }
}