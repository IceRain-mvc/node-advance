/*
* 1:引入 crypto
* */

let crypto = require("crypto");

let fs = require("fs");

/*公钥*/
let public_key_buffer = fs.readFileSync("public_key.pem");
/*私钥*/
let private_key_buffer = fs.readFileSync("private_key.pem");


let public_key = public_key_buffer.toString("ascii");

let private_key = private_key_buffer.toString("ascii");

// console.log(public_key);
// console.log(private_key);

/*
  hash
* hmac
*
*
* */

/*
*
* 非对称加密  可以破解
*
* 私钥 解密
* */

// crypto.privateDecrypt();
/*
* 公钥加密
* */
// crypto.publicEncrypt();


/*
* 公钥加密
* */

function encrypt(key, data) {

    /*加密后的密文  */
    return crypto.publicEncrypt(key, data);

}

/*
* 私钥解密
* */

function decrypt(key,decrypted) {
    return crypto.privateDecrypt(key, decrypted);
}

let str = "爱的魔力转圈圈";

/*Buffer.from : 将字符串变成二进制文件*/
let encrypted = encrypt(public_key, Buffer.from(str));

// console.log(encrypted.toString("hex"));

/*解密的时候 传递二进制值*/
let decrypted = decrypt(private_key,encrypted);

console.log(decrypted.toString("utf-8"));


