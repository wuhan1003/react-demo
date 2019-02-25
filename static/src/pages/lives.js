import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Lives extends Component {
    constructor( props ){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <section>
                
                <Link to = "/live">直播名称</Link>


            </section>
        )
    }
}
export default Lives;