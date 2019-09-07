let Router = require("koa-router");
let homeRouter = require("./api/home");
let meRouter = require("./api/me");

/*4:汇总*/
// 把所有的router汇总到一起
let router = new Router();
//homeRouter.routes(): 路由所有的信息   homeRouter.allowedMethods():如果加上的话  1设置状态码 2:头 Allow:跨域
router.use("/home",homeRouter.routes(),homeRouter.allowedMethods());
router.use("/me",meRouter.routes(),meRouter.allowedMethods());


module.exports = router;
