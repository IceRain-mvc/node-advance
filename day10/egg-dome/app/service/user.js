'use strict';

const Service = require('egg').Service;
const uid = require('node-uid');
class UserService extends Service {
  async registry(userName,password) {
    //egg-mysql
    let alluser = await this.app.mysql.select('user');
    let flag = alluser.some(item=>item.userName===userName);
    if(flag){
        return {
            code:0,
            message:'用户已存在'
        }
    }else{
        let res = await this.app.mysql.insert('user',{
            userName,
            password,
            id:uid(15)
        });
        if(res.serverStatus){
            return {
                code:1,
                message:'用户注册成功'
            }
        }
    }
  }
}

module.exports = UserService;
