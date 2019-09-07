let Router = require("koa-router");
let db = require("../../db/sql");

let userRouter = new Router();

userRouter.get("/allUser", async function (ctx) {

    console.log("/allUser");

    //查询数据库
    //返回数据
    let result = await db.allUser();
    //
    ctx.body = {
        code: 1,
        result
    }


});

module.exports = userRouter;
