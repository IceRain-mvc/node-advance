/*
* 1: 引入 crypto
* */

let crypto = require("crypto");
let fs = require("fs");

/*key.pem 私钥*/
let keyBuffer = fs.readFileSync("key.pem");

let key = keyBuffer.toString("utf-8");

/*
* 2:createHMac
* */

let hmac = crypto.createHmac("sha1", key);

hmac.update("老子最帅");

console.log(hmac.digest("hex"));






