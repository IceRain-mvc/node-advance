/*
* 1:引入 mysql
* 2:建立连接
*   新建库
* 3:抛出
*   引入
*   增删改查
* 4:接口
* */

let mysql = require("mysql");

/*2  createConnection : 建立连接*/
let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "my_data"
});

connection.connect(error => {
    if (error) {
        console.log("数据库连接失败");
    } else {
        console.log("连接成功")
    }
});

// /*query : 三个参数  */
// connection.query("select * from user", function (error, result) {
//     if (error) {
//         console.log(error);
//         return
//     }
//     console.log(result);
//
// });


module.exports = connection;

//connection.query(sql语句)
