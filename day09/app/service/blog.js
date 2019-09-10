'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
    async getList() {

        /*获取数据库的数据*/

        /*查询操作*/
        let result = await this.app.mysql.select("blog");//返回的是什么
        return result;
    }
}

module.exports = BlogService;
