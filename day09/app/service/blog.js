'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
    async getList() {

        /*获取数据库的数据*/

        /*查询操作*/
        //返回的是什么
        return await this.app.mysql.select("blog");
    }
    async getDetail(blogId) {

        /*获取数据库的数据*/

        /*查询操作*/
        //返回的是什么
        return await this.app.mysql.get("blog",{blogId});
    }
}

module.exports = BlogService;
