'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async registry() {
     let {ctx,service} = this;
     let {username,password} = ctx.request.body; 
     if(username && password){
        //首先查询用户
        let res = await service.user.registry(username,password)
        if(res.code){
            ctx.status = 200;
        }else{
            ctx.status = 401;
        }
        ctx.body = res;
     }else{
         ctx.status = 400;
         ctx.body = {
             code:0,
             message:'参数不正确'
         }
     }
  }
}

module.exports = UserController;
