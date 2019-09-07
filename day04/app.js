//1:引入koa  类
let Koa = require("koa");
//koa 的实例
let app = new Koa();

/*引入中间件*/

let logger = require("./middleware/logger");

/*引用中间件  app.use() */
app.use(logger());

//2
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
            message: "/home"
        }

    })
    .get("/me", async function (ctx) {
        //为什么是async函数 : await
        // await 连接数据库

        //json
        ctx.body = {
            message: "/me"
        }
    });


/*
* 1:下包
* 2:引入
* 3:实例.get  post  delete put  option head ... 8个
* 4:home  me  page  link ...
*   所有的路由 汇总到一起
*
* 5:app.use()
*
*
* */

/*4:汇总*/
// 把所有的router汇总到一起
let router = new Router();
//homeRouter.routes(): 路由所有的信息   homeRouter.allowedMethods():如果加上的话  1设置状态码 2:头 Allow:跨域
router.use("/home",homeRouter.routes(),homeRouter.allowedMethods());
// router.use("/me")
// router.use("/link")


//把这个中间件 放到 app.use
app.use(router.routes()).use(router.allowedMethods());


app.use(async function (ctx) {
    //let result = await mysql
    /*context*/
    ctx.body = {
        message: "Hello World"
    }
});

app.listen(3001);

console.log("server started ,the port is 3000....");





