import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Login from './login';

// const Index = () => (<div>这是首页</div>)
class Index extends Component {
    constructor(props){
        super( props );
        this.state = {

        }
    }
    render(){
        return (

            <div>这是首页</div>
        )
    }

}




const routers = () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = { Index } />
            <Route path = "/login" component = { Login } />
        </Switch>
    </Router>

)





export default routers;