import React, { Component } from 'react';
// import Avatar from '@/avatar';
class Live extends Component{
    constructor( props ){
        super( props );
        this.state = {}
    }
    componentDidMount(){
        const { TcPlayer } = window;
        new TcPlayer('test_live', {
            "flash":true,
            "h5_flv":true,
            // "mp4":"http://200002949.vod.myqcloud.com/200002949_b6ffc.f0.mp4",
            "m3u8": "http://dlhls.cdn.zhanqi.tv/zqlive/37119_4ibXM.m3u8",
            // "rtmp":"rtmp://3891.liveplay.myqcloud.com/live/3891_user_57be0dd4_be2f?bizid=3891&txSecret=99aa77f417be723f2b13e9b1d5a75838&txTime=5AE418B0",
            // "flv": "http://3891.liveplay.myqcloud.com/live/3891_user_57be0dd4_be2f.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
            "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
            "live":true,
            // "coverpic" : "http://www.test.com/myimage.jpg",
            // "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
            // "height" : '320',//视频的显示高度，请尽量使用视频分辨率高度
            

        });
    }
    render(){
        return(
            <section className = "live-container">
                <section id="test_live"></section>
                <section className = "live-guest">
                    <section className ="room-owner">
                        <section className ="owner-img">
                            <img alt ="" src = {require('../assets/images/index_hot_content_img2@2x.png')} />
                        </section>
                        <section className = "owner-info">
                            <h4>主播名称</h4>
                            <p>@123456</p>
                        </section>
                        <button className ="like-btn"><em className = "iconfont icon-favorites"></em></button>
                    </section>
                    <section className = "guest-list">
                        <section>
                            <ul>
                                <li><a href="javacript:;"><img alt = "a" src = {require('../assets/images/a.jpg')} /></a></li>
                                <li><a href="javacript:;"><img alt = "a" src = {require('../assets/images/a.jpg')} /></a></li>
                                <li><a href="javacript:;"><img alt = "a" src = {require('../assets/images/a.jpg')} /></a></li>
                                <li><a href="javacript:;"><img alt = "a" src = {require('../assets/images/a.jpg')} /></a></li>
                                <li><a href="javacript:;"><img alt = "a" src = {require('../assets/images/a.jpg')} /></a></li>
                                <li><a href="javacript:;"><img alt = "a" src = {require('../assets/images/a.jpg')} /></a></li>
                                <li><a href="javacript:;"><img alt = "a" src = {require('../assets/images/a.jpg')} /></a></li>
                                <li><a href="javacript:;"><img alt = "a" src = {require('../assets/images/a.jpg')} /></a></li>
                            </ul>
                        </section>
                        <button className ="iconfont icon-close"></button>
                    </section>
                </section>
                <section className = "room-title">
                    <h3>标题：没事聊聊天</h3>
                </section>
            
            </section>
        )
    }
}
export default Live;