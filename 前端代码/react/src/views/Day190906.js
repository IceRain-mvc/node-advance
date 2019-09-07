import React, {Component, Fragment} from 'react';
import {get, post} from "../utils/request";

let crypto = require("crypto");

let encrypt = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC30Oi3qKJFxC1PdByU+3kVolR5
QhncfRTOkUkJrapZN/1u4XzH3DpMPuAB43BGj3nCEYEIfYSBwEP7COBA32N6LJ9a
cxKftWOEym6+C1f4bZuZvXAXqHS0ILazTcgFtfq9bvWyFtnOgQ/nszpiZcfI+Bhw
2FVG0tOosHxqEGvxfwIDAQAB
-----END PUBLIC KEY-----
`;


class Day190906 extends Component {
    /*算*/
    constructor(props) {
        super(props);

        /*不能传参*/
        this.clickEncrypt = this.clickEncrypt.bind(this);
        this.getAllUser = this.getAllUser.bind(this);
    }


    clickEncrypt() {
        /*加密*/
        let value = this.state.value;
        /*根据公钥加密*/
        let buffer = crypto.publicEncrypt(encrypt, Buffer.from(value));
        //打印二进制
        console.log(buffer);


        //传递一个base64格式的数据
        //二进制转化成base64

        let messageBase64 = buffer.toString("base64");
        console.log(messageBase64);

        post("/home/encrypt", {
            messageBase64
        }).then((res) => {
            console.log(res);
        });
    }

    state = {
        value: "",
        userList: {}
    };

    getAllUser() {
        get("/user/allUser").then((res) => {
            console.log(res);

            this.setState({
                userList: res
            })
        })
    }

    render() {
        let {value} = this.state;
        return (
            <div>
                <input type="text" value={value} onChange={(ev) => {

                    this.setState({
                        value: ev.target.value
                    })
                }}/>
                <button onClick={this.clickEncrypt}>加密 传到后台 后台解密
                </button>

                <button onClick={this.getAllUser}>请求所有数据</button>

                {
                    this.state.userList.result && this.state.userList.result.map((item, index) => {
                        /*Fragment react
                        * key  diff 优化
                        * */
                        return <Fragment key={item.userId}>
                            <div>姓名:{item.name}</div>
                            <div>年龄:{item.age}</div>
                            <hr/>
                        </Fragment>
                    })
                }
            </div>
        );
    }
}

export default Day190906;
