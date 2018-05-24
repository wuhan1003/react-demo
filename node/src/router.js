const util = require('util');
const url = require('url');
const qs = require('querystring');
const EventEmitter = require('events');
// const conn = require('../conn');
// conn.connect(err=>console.log('数据库连接失败',err));
const conn = require('../conn');
conn.connect(err=>{
    if(err){
        console.log('连接数据库错误',err)
    }else{
        console.log('连接数据库成功')
    }
});





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
    let params = '';
    req.on('data',chunk =>params += chunk);
    req.on('end',()=>{
        const { username, password } = qs.parse(params);        
        //MySQL 的 WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的。
        const sql = `SELECT id, username, password FROM user WHERE BINARY 
                        username = '${username}' AND 
                        password = '${password}' LIMIT 1
                        `;
        conn.query(sql,(err,result)=>{
            if(err){
                res.end(util.inspect(err));
            }else{
                res.end(util.inspect(result));
            }
        })
    })
});
Routers.on('/register',(req,res)=>{
    let params = '';

    
    req.on('data',function(chunk){
        params += chunk;
    });
    req.on('end',function(){
        const {userName, password, email } = params;
        let sql = `INSERT INTO user(username,password,email) VALUES ('${userName}','${password}','${email}')`;
        // const sql = 'INSERT INTO user (username,email,password) VALUES ("'+ userName + '","' + password+ '","'+ email+'")';
            // const sql = 'INSER INTO user (username,password,email) VALUES (?,?,?)';
            // const addData = [userName,password,email];
        conn.query(sql,function(err,result){
            if(err){
                console.log('数据插入失败',err)
                res.end('插入数据失败')
            }else{
                console.log('插入数据成功',result);
                res.writeHead(200,{'content-type':'text/plain'});
                res.end('这是请求成功返回数据')
            }
        })
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
