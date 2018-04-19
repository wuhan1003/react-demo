import React, { Component } from 'react';
import Avatar from '@/avatar';
class Live extends Component{
    constructor( props ){
        super( props );
        this.state = {}
    }
    render(){
        return(
            <section className = "live-container">
                <section id="live-box"></section>
                <section className = "live-guest">
                    <section className ="room-owner">
                        <section className ="owner-img">
                            <img src = {require('../assets/images/index_hot_content_img2@2x.png')} />
                        </section>
                        <section className = "owner-info">
                            <h4>主播名称</h4>
                            <p>@123456</p>
                            <button></button>
                        </section>
                    </section>
                    <section>
                        <section>
                            <img src = "" />
                        </section>
                        <button>X</button>
                    </section>
                </section>
                <h3>没事聊聊天</h3>

            
            </section>
        )
    }
}
export default Live;