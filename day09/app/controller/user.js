/*
* 创建一个Controller
*
* 1:类  继承  egg Controller
* 2:方法  async
* 3:类 倒出去
*
* */
const Controller = require("egg").Controller;


class UserController extends Controller{
    async login(){
        //post请求的参数
        let body = this.ctx.request.body;

        console.log(body);

        if (body.name === "zhangsan" && body.password === "123") {
            this.ctx.body = {
                message: "登录成功",
                code: 1
            };

        } else {
            this.ctx.body = {
                message: "登录失败",
                code: -1
            };
        }
    }
}


module.exports = UserController;


