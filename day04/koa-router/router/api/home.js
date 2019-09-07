let Router = require("koa-router");
//3:创建实例
let homeRouter = new Router();

// /home   /home/index
homeRouter
    .get("/index", async function (ctx) {
        //为什么是async函数 : await
        // await 连接数据库

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
