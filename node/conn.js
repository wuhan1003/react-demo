const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'react_db',
    port:3306
});




// conn.connect(err=>{
//     if(err){
//         console.log('连接数据库错误',err)
//     }else{
//         console.log('连接数据库成功')
//     }
// });
// conn.query(
//     'SELECT * FORM user',(error,result,fields)=>{
//         if(error){
//             console.log('查询数据库错误',error)
//         }else{
//             console.log('查询结果',result);
//             console.log('查询失败',fields)
//         }
//     }
// );
module.exports = conn;


