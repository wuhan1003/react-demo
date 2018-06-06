import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Login from './login';
// import Register from './register';
// import Chat from './chat';

// import Live from './live';
import Header from '@/header';
import { routes } from 'src/routers';
// const Index = () => (<div>这是首页</div>)
class Index extends Component {
    constructor(props){
        super( props );
        this.state = {

        }
    }
    render(){
        return (
            <section>
                <Header title = "首页" { ...this.props } />
                <ul className ="nav-list">
                    { routes.map((route,key) => route.meta && <li key = { key }><Link to = {route.path}> {route.meta && route.meta.text}</Link></li>)}
                </ul>
            </section>
        )
    }

}


class Wrap extends Component{
    constructor( props ){
        super(props)
   
   
   
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










// const routers = () => (
//     <Router>
//         <Switch>

//             {/* <Route exact path = "/" component = { Wrap } />
//             <Route path = "/login" component = { Login }  />
//             <Route path = "/register" component = { Register } />
//             <Route path = "/chat" component = { Chat } />
//             <Route path = "/live" component = { Live } />
//             <Route path = "*" component = { Nofound } /> */}
//         </Switch>
//     </Router>

// )





export default Index;