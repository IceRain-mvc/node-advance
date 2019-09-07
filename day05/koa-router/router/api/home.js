let Router = require("koa-router");
//3:创建实例
let homeRouter = new Router();

//1:引入子进程模块
let {fork} = require("child_process");

// /home   /home/index
homeRouter
    .get("/index", async function (ctx) {
        //为什么是async函数 : await
        // await 连接数据库


        //2:创建进程 单独的js文件   computeProcess :进程对象
        let computeProcess = fork("./process/childProcess.js");

        //3:发送消息 到子进程
        computeProcess.send("hello my child process");

        /*message : 不能变成其他的 */
        computeProcess.on("message", function (msg) {
            //msg : 子进程发送来的消息
            console.log("主进程:", msg);

        });

        //json
        // ctx.status = 200;
        ctx.body = {
            message: "/home/index"
        }

    })
    .get("/me", async function (ctx) {
        //为什么是async函数 : await
        // await 连接数据库

        //json
        ctx.body = {
            message: "/home/me"
        }
    });

module.exports = homeRouter;
