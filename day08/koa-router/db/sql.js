let connection = require("./index");

module.exports = {
    allUser() {
        /*返回的是什么  Promise*/
        return new Promise((resolve, reject)=>{
            connection.query("select userId,name,age from user",(err,res)=>{
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }

                resolve(res);
            })
        });
    }

};
