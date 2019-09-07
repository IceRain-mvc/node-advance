//1:引入koa  类
let Koa = require("koa");
//koa 的实例
let app = new Koa();
app.use(async function(ctx) {
    //let result = await mysql
    /*context*/
    ctx.body = {
        message: "Hello World"
    }
});

app.listen(3000);

console.log("server started ,the port is 3000....");





