import React from 'react';
import PrivateRoute from '@/privateRoute';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Index from 'pages/index';
import Login from 'pages/login';
import Register from 'pages/register';
import Chat from 'pages/chat';
import Live from 'pages/live';
import Upload from 'pages/upload';
import Lives from 'pages/lives';
// import TestFx from 'pages/test.fx';
function Nofound ( props ){
    return <div>404</div>
}
const routes = [
    {
        path:'/',
        component:Index,
        meta:{
            text:'首页',
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
            text:'好友列表',
        },
        requireAuth:true,
        component:Chat,
    },
    {
        path:'/live',
        meta:{
            text:'直播a'
        },
        component:Live,
    },
    {
        path:'/lives',
        meta:{
            text:'直播列表'
        },
        component:Lives,
    },
    {
        path:'/upload',
        meta:{
            text:'图片上传'
        },
        component:Upload,
    }
    ,
    {
        path:'*',
        component:Nofound,
    }
];

const routers = routes.map( (route,key) => <PrivateRoute {...route } key = { key } /> );
export default routers;
export { routes };


