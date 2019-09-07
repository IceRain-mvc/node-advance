//1:引入koa  类
let Koa = require("koa");
//koa 的实例
let app = new Koa();

/*引入中间件*/

let logger = require("./middleware/logger");

/*引用中间件  app.use() */
app.use(logger());
let router = require("./router");

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

console.log("server started ,the port is 3001....");





