let Router = require("koa-router");
//3:创建实例
let homeRouter = new Router();

//1:引入子进程模块
let {fork} = require("child_process");
let crypto = require("crypto");


let private_key = `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQC30Oi3qKJFxC1PdByU+3kVolR5QhncfRTOkUkJrapZN/1u4XzH
3DpMPuAB43BGj3nCEYEIfYSBwEP7COBA32N6LJ9acxKftWOEym6+C1f4bZuZvXAX
qHS0ILazTcgFtfq9bvWyFtnOgQ/nszpiZcfI+Bhw2FVG0tOosHxqEGvxfwIDAQAB
AoGBAJdXqvPkJU852XCMkifb8PLuB40a7n4KgkIdfrw4P4RbxA8yGnHXkixKrFcB
suR1pvMxREMATUQjUBV1VmYzRwvfn2kBkXVTe57QxY2wdt16EeDkQ6XPgyhchfts
myo/iLr0zdU0VobJj3fV0oeRxe19qlwMxyO3dcKuWSdV3xWpAkEA5uMQ0jY/3jCZ
B0IT6pDqCsV0dDY9f9upNptwkBFme8Ki4VapnOPjpKdffgPtC2Q2TKGVhV7ztVAl
Y3xkfL92ywJBAMvPLTW4zUJ6blbOo5Ssqx7ZL9xJ35vsZ/URrDIOXBxSBkTDat0g
zkHFHuuGz72pdyBFTa0jFJii+0Bhg8kmZZ0CQQDCylD3uLMbho6kk/fvjsEVw06j
eNtb0nupSWym7zcyNJxsVkwUxCLbWCX1T+SeFrbE4hIeimQ71NkmXNz+bh4PAkAw
VUONd/QFje9Y2sxkV8aFHFCDV2mWGqxUrApAHLOva6xc5lMTedIwOsUoaeIeQnAj
0QuowacCw7P+AqI0M8zpAkEAp1RTtbb75JlfOEstDZEAdX7YnpZyzzlzXf2byWBz
xfCDRT6r3a38sbI4qEjTVbEYjb89QQ0G5siPMjQYmEqykw==
-----END RSA PRIVATE KEY-----
`;


// /home   /home/index
homeRouter
    .get("/index", async function (ctx) {
        //为什么是async函数 : await
        // await 连接数据库


        //2:创建进程 单独的js文件   computeProcess :进程对象
        let computeProcess = fork("./process/childProcess.js");

        //3:发送消息 到子进程
        computeProcess.send("hello my child process");

        /*message : 不能变成其他的 */
        computeProcess.on("message", function (msg) {
            //msg : 子进程发送来的消息
            console.log("主进程:", msg);
        });

        //json
        // ctx.status = 200;
        ctx.body = {
            message: "/home/index"
        }

    })
    .get("/me", async function (ctx) {
        //为什么是async函数 : await
        // await 连接数据库

        //json
        ctx.body = {
            message: "/home/me"
        }
    })
    .post("/encrypt", async function (ctx) {
        let messageBase64 = ctx.request.body.messageBase64;

        //转化成二进制
        // Buffer.from();//字符串 16进制
        let buffer = new Buffer(messageBase64,"base64");


        let decrypted = crypto.privateDecrypt(private_key, buffer);

        let message = decrypted.toString("utf-8");
        console.log(message);

        // let buffer = crypto.publicEncrypt(encrypt, Buffer.from(value));
        // console.log(bufferIn.toString("hex"));
        // console.log(buffer.toString("hex"));
        // let userInfo  = ctx.request.body.buffer.replace(/\s+/g, '+')
        // console.log(userInfo);

        // let decrypted = crypto.privateDecrypt(private_key, buffer);

            // result: decrypted
        ctx.body = {
            message: "/home/me",
            result: message
        }
    });

module.exports = homeRouter;



