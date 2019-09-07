/*
* 1: 引入 crypto
* */

let crypto = require("crypto");

/*
* 2: 创建hash对象
* */

let hash = crypto.createHash("md5");

/*
* 3:hash 加密  缓存
* */

hash.update("老子最帅");

/*
* 得到加密结果  Buffer:二进制
*
* 16进制  0-9  abcdef
* */
console.log(hash.digest("hex"));//显示密文




