async function fn() {

    return Promise.resolve(3)
}

async function fn1() {
    return setTimeout(() => {
        console.log(4);//异步 宏任务
    }, 0);

}


async function aa() {
    console.log(await fn());
    console.log(2);
}

// aa();


//2 1 3 4
//2 1 4 3


define(function () {
    return [
        {
            img: "http://www.aaa.com/a.jpg",
            name: "江小白",
            content: "我于是我拼的标志....",
            sex: 1
        },
        {
            img: "http://www.aaa.com/b.jpg",
            name: "江小黑",
            content: "我于是我拼的标志....",
            sex: 2
        }

    ]
});
