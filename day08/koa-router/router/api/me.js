let Router = require("koa-router");
//3:创建实例
let meRouter = new Router();

/**
 *
 * @param num  数值
 */
function compute(num) {
    // let result = 1;
    // for (let i = 1; i <= num; i++) {
    //
    //     result *= i;
    // }
    // console.log(result);

    return new Promise((resolve, reject) => {

        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        // console.log(result);

        resolve(result);
    })
}


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

        // console.log(ctx.query.num);

        // 1*2*3....*10
        // promise 计算完成之后  resolve()
        // let result = await compute(num)

        //get  ? name = 字符串
        let result = await compute(parseInt(ctx.query.num));

        //json
        ctx.body = {
            message: "/me/me",
            result
        }
    });

module.exports = meRouter;
