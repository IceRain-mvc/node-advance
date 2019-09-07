import React, {Component, Fragment} from 'react';

import {post} from "../utils/request";
import {Input, Icon, Row, Col, Button} from "antd";

class Login extends Component {

    login() {
        let {userName, password, realName} = this.state;
        let userNameTrim = userName.trim();
        let passwordTrim = password.trim();
        // let realNameTrim = realName.trim();


        if (!userNameTrim || !passwordTrim) {
            alert("用户名或密码不能为空");
            return;
        }

        // realName: realNameTrim
        post("/login", {
            userName: userNameTrim,
            password: passwordTrim,
        }).then((res) => {
            console.log(res);
            if (res.code === 1) {
                let token = res.token;
                window.localStorage.setItem("token", token);
                this.props.history.push("/user");
            } else {
                alert("登录失败");
            }

        });


    }

    state = {
        userName: "",
        password: "",
        realName: ""
    };

    render() {
        let {userName, password, realName} = this.state;
        return (
            <div>
                <div style={{marginTop: 50}}>
                    <Row>
                        <Col span={8} offset={8}>
                            <Input style={{marginBottom: 12}} value={userName} onChange={
                                (event) => {
                                    this.setState({
                                        userName: event.target.value

                                    })
                                }
                            } placeholder={"请输入用户名"} prefix={
                                <Icon type="user"/>
                            }/>

                            <Input style={{marginBottom: 12}} value={password} onChange={
                                (event) => {
                                    this.setState({
                                        password: event.target.value

                                    })
                                }
                            } placeholder={"请输入密码"} prefix={
                                <Icon type="lock"/>
                            }/>
                            {/*<Input style={{marginBottom: 12}} value={realName} onChange={*/}
                            {/*(event) => {*/}
                            {/*this.setState({*/}
                            {/*realName: event.target.value*/}

                            {/*})*/}
                            {/*}*/}
                            {/*} placeholder={"请输入真实姓名"} prefix={*/}
                            {/*<Icon type="reddit" />*/}
                            {/*}/>*/}
                            <Button style={{width: "100%"}} type="primary" onClick={this.login.bind(this)}>登录</Button>
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Login;
