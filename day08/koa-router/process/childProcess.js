/*
* 在子进程中接收
*
* 进程通信  IPC机制 管道  message
*
* */

process.on("message", function (msg) {
    console.log("子进程:", msg, process.pid);

    //向主进程发送消息

    process.send("hello main process");
});
