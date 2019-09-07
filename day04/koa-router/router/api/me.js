let Router = require("koa-router");
//3:创建实例
let meRouter = new Router();

// /home   /home/index
meRouter
    .get("/index", async function (ctx) {
        //为什么是async函数 : await
        // await 连接数据库

        //json
        // ctx.status = 200;
        ctx.body = {
            message: "/me/index"
        }

    })
    .get("/me", async function (ctx) {
        //为什么是async函数 : await
        // await 连接数据库

        /*
        * ctx :
        * */

        console.log(ctx.query.num);

        // 1*2*3....*10
        // promise 计算完成之后  resolve()
        // let result = await compute(num)

        //json
        ctx.body = {
            message: "/me/me",
            result:1000
        }
    });

module.exports = meRouter;
