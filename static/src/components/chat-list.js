import React, { Component } from 'react';
import Avatar from '@/avatar';
import Badge from '@/badge';
class ChatList extends Component {
    constructor( props ){
        super( props );
        this.state = {}

    }
    componentWillMount(){
        console.log(this.props.listData )
    }
    render(){
        return(
            <section className = "list-container">
                <ul>
                    {
                        this.props.listData.map((item,key)=>(

                                <li key = { key }>
                                    <Avatar src = { item.img } className = "extra-avatar" />
                                    <section>
                                        <h3>{ item.name}</h3>
                                        <p>{ item.title }</p>
                                    </section>
                                    {
                                        item.number && <Badge number = { item.number } />
                                    }
                                </li>
                            )
                        )
                    }



                    
                </ul>
            </section>


        )
    }
}

export default ChatList;