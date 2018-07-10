import React, { Component } from 'react';
// const Fx = require('fx.live');
class TestFx extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount(){
        // Fx.live.init({
		// 	id: 'test', //播放器ID
		// 	src: '../swf/PlayPlayer.swf', //播放器swf路径
		// 	width: 480, //播放器宽度
		// 	height: 360, //播放器高度
		// 	// roomId: '1069431', //房间号
		// 	platform: 'web', //平台(web:繁星web,embed:内嵌直播页)
		// 	liveName: 'fx_hifi_141436748', //流名字
		// 	liveClient: ["http://stream2.ahtv.cn/ahgj/fd/live.m3u8"], //流服务器地址
		// 	liveStatus: 1 // 直播状态
		// });
    }
    render(){
        return(
            <div>
                <div id="test"></div>





            </div>
        )
    }


}


export default TestFx;