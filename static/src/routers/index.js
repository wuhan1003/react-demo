import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Index from 'pages/index';
import Login from 'pages/login';
import Register from 'pages/register';
import Chat from 'pages/chat';
import Live from 'pages/live';
function Nofound ( props ){
    return <div>404</div>
}
const routes = [
    {
        path:'/',
        component:Index,
        meta:{
            text:'首页'
        },
        exact:true,
    },
    {
        path:'/login',
        component:Login,
        meta:{
            text:'登录'
        },
    },
    {
        path:'/register',
        meta:{
            text:'注册'
        },
        component:Register,
    },
    {
        path:'/chat',
        meta:{
            text:'好友列表'
        },
        component:Chat,
    },
    {
        path:'/live',
        meta:{
            text:'直播'
        },
        component:Live,
    },
    {
        path:'*',
        component:Nofound,
    }
];

const routers = routes.map( (route,key) => <Route {...route } key = {key} /> );
export default routers;
export { routes };


