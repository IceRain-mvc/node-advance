'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    //文件夹
    router.get('/', controller.home.index);
    router.post("/login", controller.user.login);
};