const util = require('util');
const url = require('url');
const qs = require('querystring');
// const conn = require('../conn');
// conn.connect(err=>console.log('数据库连接失败',err));


function router(req,res,conn){
    const uri = url.parse(req.url);
    if(req.method === "POST"){
        const pathname = uri.pathname;
        if(pathname === '/register'){
            let params = '';
            req.on('data',function(chunk){
                params += chunk;
            });
            req.on('end',function(){
                params = qs.parse(params);
                console.log('post请求参数',params);
                const {userName, password, email } = params;
                console.log(userName);
                // let sql = `INSERT INTO user(username,password,email) VALUES (${userName},${password},${email})`;
                // const sql = 'INSERT INTO user (username,email,password) VALUES ("'+ userName + '","' + password+ '","'+ email+'")';
                    const sql = 'INSER INTO user (username,password,email) VALUES (?,?,?)';
                    const addData = [userName,password,email];
                conn.query(sql,addData,function(err,result){
                    if(err){
                        console.log('数据插入失败',err)
                        res.end('插入数据失败')
                    }else{
                        console.log('插入数据成功',result);
                        res.writeHead(200,{'content-type':'text/plain,chatset="utf-8"'});
                        res.end('这是请求成功返回数据')
                    }
                })
            });




        }
    }
    
}
module.exports = router;
