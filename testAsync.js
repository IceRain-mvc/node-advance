/*
* await 异步  promise
*
* ctx.body = {result:result}
*
* */

/**
 *
 * @param num  数值
 */
function compute(num) {
    // let result = 1;
    // for (let i = 1; i <= num; i++) {
    //
    //     result *= i;
    // }
    // console.log(result);

    return new Promise((resolve, reject) => {

        let result = 1;
        for (let i = 1; i <= num; i++) {

            result *= i;
        }
        // console.log(result);

        resolve(result);
    })
}

async function getResult() {
    console.log(await compute(14));
    console.log(1);
}

getResult();
