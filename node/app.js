const server = require('./server');
const conn = require('./conn');
conn.connect(err=>{
    if(err){
        console.log('连接数据库错误',err)
    }else{
        console.log('连接数据库成功')
    }
});
// conn.query(
//     'SELECT * FROM user',(error,result,fields)=>{
//         if(error){
//             console.log('查询数据库错误',error)
//         }else{
//             console.log('查询结果',result);
//             console.log('查询失败',fields)
//         }
//     }
// );
server(conn);