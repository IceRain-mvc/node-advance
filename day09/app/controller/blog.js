'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
    async getList() {
        let {ctx, service} = this;

        /*service 方法*/
        let result = await service.blog.getList();

        // ctx.status = 200;

        ctx.body = {
            result,
            code: 1
        }
    }
}

module.exports = BlogController;
