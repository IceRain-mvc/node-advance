module.exports = function () {
    /*
    * koa
    *   application
    *       上下文  this.app
    *   context
    *       this.ctx
    *       .query()
    *       .body = {}
    *
    *       .method
    *       .url
    *
    *
    *   request
    *   response
    *
    * */

    return async function (ctx, next) {
        //打印
        logger(ctx);
        await next();//返回的是promise
    };

};


let logger = (ctx) => {
    console.log("请求方式:" + ctx.method);
    console.log("主机地址:" + ctx.header.host);
    console.log("详细地址:" + ctx.url);

};
