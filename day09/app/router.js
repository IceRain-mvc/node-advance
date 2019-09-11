module.exports = app => {
    //app egg应用实例
    let {router, controller, config} = app;
    router.get('/', controller.home.index);
    router.post('/registry', controller.user.registry);  //csrf
    router.get('/getBlogList', controller.blog.getList);  //csrf
    router.get('/blogDetail', controller.blog.getDetail);  //csrf
};


//app 整个应用实例
//ctx context  上下文对象  request response
//middleware  中间件
//router 路由
//helper  辅助方法
