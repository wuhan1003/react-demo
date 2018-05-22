const server = require('./server');

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
server();