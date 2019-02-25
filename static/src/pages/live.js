import React, { Component } from 'react';
import flv from 'flv.js';
const RTMP = require('node-rtmpapi');
const socket = require('simple-websocket');
// import WebRtmpPlayer from '../assets/js/sa';
// import Avatar from '@/avatar';
class Live extends Component{
    constructor( props ){
        super( props );
        this.state = {}
    }
    componentDidMount(){

        // const ws = new WebSocket('ws://193.112.57.37:1999');
        // ws.onopen = function(){
        //     ws.send('a');
        //     console.log('数据发送中')
        // }
        // ws.onmessage = function(evt){
        //     console.log(evt)
        // }
        //rtmp://58.200.131.2:1935/livetv/hunantv

        // var player = new WebRtmpPlayer('ws://193.112.57.37:1999', 'livetv', 'hunantv', 'rtmp://58.200.131.2:1935/livetv');
            // player.canvas.style['height'] = '100%';
            // document.getElementById("test_live").appendChild(player.canvas);


        const { TcPlayer } = window;
        new TcPlayer('test_live', {
            "flash":true,
            "h5_flv":true,
            // "mp4":"http://200002949.vod.myqcloud.com/200002949_b6ffc.f0.mp4",
            // "m3u8": "http://3891.liveplay.myqcloud.com/live/3891_user_8f25040f_cef8.m3u8",
            "rtmp":"rtmp://pili-live-rtmp.kxhflx.com/kxhflx/89465664_20180928145427265",
            // "flv": "http://3891.liveplay.myqcloud.com/live/3891_user_57be0dd4_be2f.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
            "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
            "live":true,
            // "coverpic" : "http://www.test.com/myimage.jpg",
            // "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
            // "height" : '320',//视频的显示高度，请尽量使用视频分辨率高度
            

        });
        // this.connect()
    }
    connect(){
        //rtmp://3891.liveplay.myqcloud.com/live/3891_user_86415e15_f71b
        const _this  = this;
        const ws = new socket('ws://47.98.128.181:3389');
        
        ws.onopen = function(){
            console.log(`ws链接`);
            RTMP.rtmpSession(ws,true,_this.getSession);
        }
        console.log(ws);
        // ws.onmessage = function(e){
        //     console.log(e);
        // }
    }
    getSession(session){
        // console.log(session)
        // this._rtmpSession = session;
		// console.log("rtmpSession...cb...");
		// this._invokeChannel = new RTMP.rtmpChunk.RtmpChunkMsgClass({streamId:5}, {sock: this._sock, Q: session.Q, debug: false});
		// this._invokeChannel.invokedMethods = {}; //用来保存invoke的次数，以便收到消息的时候确认对应结果
		// this._videoChannel = new RTMP.rtmpChunk.RtmpChunkMsgClass({streamId:8}, {sock: this._sock, Q: session.Q, debug: false});

		// session.Q.Q(0,this._rtmpConnect.bind(this));
		// session.Q.Q(0, () =>
		// {
		// 	console.log("Begin LOOP");
		// 	session.msg.loop(this._handleRtmpMessage.bind(this));
		// });
    }


    render(){
        return (
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