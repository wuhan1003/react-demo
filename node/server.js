const http = require('http');
const util = require('util');
const url = require('url');
const querystring = require('querystring');
const options = {

}
const server = function(){
    http.createServer((req,res)=>{
        const uri = url.parse(req.url);

        res.writeHead(200,{'content-type':'text/plain,chatset="utf-8"'});
        const query = querystring.parse(uri.query);
        console.log('query',query)
        res.end(util.inspect(query));
    }).listen(8090,err=>{
        if(err){
            console.log('服务器开启错误',err)
        }else {
            console.log('服务器开启成功')
        }
    })
}


module.exports = server;