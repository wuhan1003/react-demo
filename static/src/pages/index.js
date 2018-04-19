import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Chat from './chat';
import Header from '@/header';
function Nofound ( props ){
    return <div>404</div>
}

// const Index = () => (<div>这是首页</div>)
class Index extends Component {
    constructor(props){
        super( props );
        this.state = {

        }
    }
    componentDidMount(){
        const { TcPlayer } = window;
        new TcPlayer('test_live', {
            "mp4":"http://200002949.vod.myqcloud.com/200002949_b6ffc.f0.mp4",
            // "m3u8": "http://2157.liveplay.myqcloud.com/2157_358535a.m3u8",
            // "flv": "http://2157.liveplay.myqcloud.com/2157_358535a.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
            "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
            // "coverpic" : "http://www.test.com/myimage.jpg",
            "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
            "height" : '320'//视频的显示高度，请尽量使用视频分辨率高度
        });
    }
    render(){
        return (
            <section>
                <Header title = "首页" { ...this.props } />
                <div id="test_live"  style={{width:'100%', height:'300px'}}></div>
            </section>
        )
    }

}




const routers = () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = { Index } />
            <Route path = "/login" component = { Login } />
            <Route path = "/register" component = { Register } />
            <Route path = "/chat" component = { Chat } />
            <Route path = "*" component = { Nofound } />
        </Switch>
    </Router>

)





export default routers;