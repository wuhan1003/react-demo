import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './login';
import Register from './register';
import Chat from './chat';
// import Header from '@/header';
import Live from './live';
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
            "flash":true,
            "h5_flv":true,
            // "mp4":"http://200002949.vod.myqcloud.com/200002949_b6ffc.f0.mp4",
            // "m3u8": "http://3891.liveplay.myqcloud.com/live/3891_user_3ad2af79_11d2.m3u8",
            "rtmp":"rtmp://3891.liveplay.myqcloud.com/live/3891_user_3ad2af79_11d2?bizid=3891&txSecret=7470dad1ce96d0ba503b85ebb233f003&txTime=5AE145CE",
            "flv": "http://3891.liveplay.myqcloud.com/live/3891_user_3ad2af79_11d2.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
            "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
            // "coverpic" : "http://www.test.com/myimage.jpg",
            // "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
            // "height" : '320',//视频的显示高度，请尽量使用视频分辨率高度
            

        });
    }
    render(){
        return (
            <section>
                {/* <Header title = "首页" { ...this.props } /> */}
                <div id="test_live"  style={{width:'100%', height:'100vh'}}></div>
            </section>
        )
    }

}


class Wrap extends Component{
    constructor( props ){
        super( props );
        this.state = {}
    }
    componentWillMount(){
        console.log('redux', this.props );
    }
    render(){
        return(
            // <Component {...this.props } />
            <div>test</div>
        )
    }


}

const mapStateToProps = (state,ownProps)=>{
    return state;
}
Wrap = connect(mapStateToProps)(Wrap);


function wrap(component){






}







const routers = () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = { Wrap } />
            <Route path = "/login" component = { Login } />
            <Route path = "/register" component = { Register } />
            <Route path = "/chat" component = { Chat } />
            <Route path = "/live" component = { Live } />
            <Route path = "*" component = { Nofound } />
        </Switch>
    </Router>

)





export default routers;