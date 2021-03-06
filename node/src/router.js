const util = require('util');
const url = require('url');
const qs = require('querystring');
const EventEmitter = require('events');
const zlib = require('zlib');
const http = require('http');
const fs = require('fs')
;// const conn = require('../conn');
// conn.connect(err=>console.log('数据库连接失败',err));
const conn = require('../conn');
conn.connect(err=>{
    if(err){
        console.log('连接数据库错误',err)
    }else{
        console.log('连接数据库成功')
    }
});
const options = {
    host :'127.0.0.1',
    port:8090,
    method:'POST',
    path:'/sign',
    headers:{
        'content-type':'text/plain'
    }
}



function f(callback){
    const p = new Promise((resolve,reject)=>{
        if( path === '/sign' ){
            let params = '';
            req.on('data',chunk =>params += params);
            req.on('end',()=>{
                const { username, password } = qs.parse(params);
                //MySQL 的 WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的。
                const sql = `SELECT username,password FROM user WHERE BINARY 
                             username = '${username}' AND 
                             password = '${password}' LIMIT 1
                             `;
                conn.query(sql,(err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        }
    })
    return p; 
}






let Routers = new EventEmitter();

Routers.on('/sign',(req,res)=>{
    let resData = {};
    let output = '', params = '';
    // if(req.headers['content-encoding']==='gzip'){
    //     let gunzip = zlib.createGunzip();
    //     req = req.pipe(gunzip);
    // }
    req.on('data',chunk =>params += chunk);
    req.on('end',()=>{
        const { username, password } = qs.parse(params);        
        //MySQL 的 WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的。
        const sql = `SELECT id, username, password FROM user WHERE BINARY 
                        username = '${username}' AND 
                        password = '${password}'
                        `;
        conn.query(sql,(err,result)=>{
            if(err){
                res.writeHead(504);
            }else{
                resData.code  = 0;
                if(result.length === 0){
                    resData.msg = "用户名或密码不正确";
                }else{
                    resData.msg = '登录成功';
                    resData.data = Object.assign({},result[0]);
                    res.setHeader('Set-Cookie',`{id:${resData.data.id}}`);
                }
                res.writeHead(200,{'Content-Type':'text/html;charset = utf8'});
            }
            
            res.end(JSON.stringify(resData),'utf8');
        })
    })
});
Routers.on('/register',(req,res)=>{
    let params = '';
    let resData = {};
    
    req.on('data',function(chunk){
        params += chunk;
    });
    req.on('end',function(){
        console.log(`params:${params}`)
        const {userName, password, email } = qs.parse(params);
        let SelSql = `SELECT username FROM user WHERE BINARY username = '${userName}'`;

        conn.query(SelSql,(err,result)=>{
            if(err){
                resData.code = 1;
                resData.msg = '数据库查询失败';
            } else {
                if(result.length === 0 ){
                    let sql = `INSERT INTO user(username,password,email) VALUES ('${userName}','${password}','${email}')`;
                    // const sql = 'INSERT INTO user (username,email,password) VALUES ("'+ userName + '","' + password+ '","'+ email+'")';
                        // const sql = 'INSER INTO user (username,password,email) VALUES (?,?,?)';
                        // const addData = [userName,password,email];
                    conn.query(sql,function(err,result){
                        if(err){
                            resData.code = 1;
                            resData.msg = '数据库查询失败，请稍后重试';
                        }else{
                            resData.code = 0; 
                            resData.msg = "用户注册成功";
                        }
                    })
                }else{
                    resData.code = 2;
                    resData.msg = "用户已注册";
                }
            }
            console.log(`resData:${resData}`)
            res.writeHead(200,{'content-type':'text/html,charset=utf-8'});
            res.end(JSON.stringify(resData),'utf-8');
        })
        
        
        // conn.query(sql,(err,result)=>{
        //     if(err){
        //         resData.code = 1;
        //         resData.msg = "数据库查询失败，请稍后重试";
        //     } else {
        //         console.log( `result:${result.length}` );
        //         res.end(JSON.stringify(result),'utf-8');
        //     }
        //     res.end(JSON.stringify(resData),'utf-8');
        // })



        
    });
    
})
Routers.on('/upload',(req,res)=>{
    let params = '';
    let resData = {};
    
    req.on('data',function(chunk){
        params += chunk;
    });
    req.on('end',()=>{
        const data = qs.parse(params);
        const entries = Object.entries(data);
        for(let [key,val] of entries){
            val = val.replace(/^data:image\/\w+;base64,/,"");
            const baseBuffer = Buffer.from(val,'base64');
            fs.writeFile('../pub/images',baseBuffer,err=>{
                if(err){
                    console.log(`写入图片出错：${err}`);
                }
            })
        }
        res.end(JSON.stringify(data));
    });
    
})





function router(req,res){
    let data = {};
    // Routers.require = Object.create(req,{
    //     Routers:{
    //         configurable:true,
    //         enumerable:true,
    //         writeable:true,
    //         value:Routers
    //     }
    // });
    // Routers = Object.defineProperties(Routers,{
    //     'req':{
    //         configurable:true,
    //         enumerable:true,
    //         writeable:true,
    //         value:req
    //     },
    //     'res':{
    //         configurable:true,
    //         enumerable:true,
    //         writeable:true,
    //         value:res
    //     }
    // });

 


    


    const uri = url.parse(req.url);
    if(req.method === "POST"){
        const pathname = uri.pathname;

        //eventNames()方法以数组形式返回所有绑定在Routers上的方法名称
        const eventNames = Routers.eventNames();
        if(eventNames.includes(pathname)){
            Routers.emit(pathname,req,res)
        } else {
            res.writeHead(404,{'content-type':'text/plain','charset':'utf-8'});
            res.end('404');
        }


        // events.forEach( eventName => {
        //     if(eventName === pathname){
        //         routeEmitter.on(eventName)
        //     }
        // });



        // if(pathname === '/register'){
        //     let params = '';
        //     req.on('data',function(chunk){
        //         params += chunk;
        //     });
        //     req.on('end',function(){
        //         params = qs.parse(params);
        //         const {userName, password, email } = params;
        //         let sql = `INSERT INTO user(username,password,email) VALUES ('${userName}','${password}','${email}')`;
        //         // const sql = 'INSERT INTO user (username,email,password) VALUES ("'+ userName + '","' + password+ '","'+ email+'")';
        //             // const sql = 'INSER INTO user (username,password,email) VALUES (?,?,?)';
        //             // const addData = [userName,password,email];
        //         conn.query(sql,function(err,result){
        //             if(err){
        //                 console.log('数据插入失败',err)
        //                 res.end('插入数据失败')
        //             }else{
        //                 console.log('插入数据成功',result);
        //                 res.writeHead(200,{'content-type':'text/plain'});
        //                 res.end('这是请求成功返回数据')
        //             }
        //         })
        //     });
        // }
    }
    
}
module.exports = router;
