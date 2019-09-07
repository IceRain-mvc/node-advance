import React, {Component} from 'react';
import {get, post} from "../utils/request";

let crypto = require("crypto");
// let fs = require("fs");
// let keyBuffer = fs.readFileSync("../pem/public_key.pem");

let public_key = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIMmGRkjLmYaUnqDyks0MgB4eh
gRPvjXo89jMA6topyHczhYg13wzZBVa6/cKASc2KrmXt6w1Dgc/QOw0JOrvuZ/He
Y8gWCciVk6zjJCKFBBz6GacWH7d/73yUtlmtUW9QfsMfkOL1c1TbnAcN5tc6fobw
q8tx12UCvQhT8wFN3QIDAQAB
-----END PUBLIC KEY-----
`;

class Day0906 extends Component {
    state = {
        value: ""
    };

    render() {
        let {value} = this.state;
        return (
            <div>
                {/*需要加密的*/}
                <input type="text" value={value} onChange={(ev) => {
                    this.setState({
                        value: ev.target.value
                    })
                }}/>
                <button onClick={() => {
                    //加密
                    let enctyptedBuffer = crypto.publicEncrypt(public_key, Buffer.from(value));
                    console.log(enctyptedBuffer);
                    //base64
                    let message = enctyptedBuffer.toString('base64');
                    console.log(message);
                    post("/home/api", {
                        encrypt: message
                    }).then((res) => {
                        console.log(res);
                    });

                }}>加密传到后台 后台解密
                </button>
            </div>
        );
    }
}

export default Day0906;
