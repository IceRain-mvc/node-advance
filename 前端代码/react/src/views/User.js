import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {get, post} from "../utils/request";
import {Divider, Table, Input, Button,Modal} from "antd";


class User extends Component {

    state = {
        userId: -1,
        phoneNum: "",
        realName: "",
        userIcon: "",
        userName: "",
        keyword: "",
        visible:false,
        userList: [],
        columns: [
            {
                title: "头像",
                dataIndex: "userIcon",
                key: "userIcon",
                render: (text) => {
                    console.log(text);
                    return <img style={{width: '50px', borderRadius: "50%", height: "50px"}} src={text} alt=""/>
                }

            },
            {
                title: "用户名",
                dataIndex: "userName",
                key: "userName"

            }, {
                title: "真实姓名",
                dataIndex: "realName",
                key: "realName"

            },
            {
                title: "操作",
                dataIndex: "action",
                key: "action",
                render: (text, record) => {
                    return (<span>
                        <Button type="link"  onClick={()=>{
                            this.setState({
                                visible: true,
                                userId: record.key,
                                phoneNum: record.phoneNum,
                                realName: record.realName,
                                userIcon: record.userIcon,
                                userName: record.userName

                            })
                        }}>修改 {record.name}</Button>
                        <Divider type="vertical"/>
                        <Button type="link" >删除</Button>
                    </span>)

                }

            },

        ]
    };

    render() {
        let {phoneNum,
            realName,
            userIcon,
            userName} = this.state;
        return (
            <>
                <h2>用户列表</h2>
                <Input value={this.state.keyword} onChange={(event)=>{
                    this.setState({
                        keyword: event.target.value
                    })
                }}/>
                <Button type="primary" onClick={this.searchBtn.bind(this)}>搜索</Button>
                <Table columns={this.state.columns} dataSource={this.state.userList}/>


                <Modal
                    title="修改"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Input value={phoneNum} onChange={(e)=>{
                        this.setState({
                            phoneNum: e.target.value
                        })
                    }}/>
                    <Input value={realName} onChange={(e)=>{
                        this.setState({
                            realName: e.target.value
                        })
                    }}/>
                    <Input value={userIcon} onChange={(e)=>{
                        this.setState({
                            userIcon: e.target.value
                        })
                    }}/>
                    <Input value={userName} onChange={(e)=>{
                        this.setState({
                            userName: e.target.value
                        })
                    }}/>
                </Modal>
            </>
        );
    }

    searchBtn() {
        let keyword = this.state.keyword;
        get("/user/search?input=" + keyword).then((res) => {
            // console.log(res);
            this.getTableDate(res);
        });
    }

    handleOk() {
        let {
            userId,
            phoneNum,
            realName,
            userIcon,
            userName
        } = this.state;
        this.setState({
            visible: false
        });

        post("/user/update",{
            userId,
            phoneNum,
            realName,
            userIcon,
            userName
        }).then((res)=>{
            console.log(res);
            /*
            * 更新数据
            *
            * */
            // this.forceUpdate();//更新  render
            // this.setState({}) 生命周期:
            this.requestFirst();
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }


    componentDidMount() {
        this.requestFirst();
    }

    requestFirst() {
        get("/user").then((res) => {
            console.log(res);
            //this.state.userList = res;
            this.getTableDate(res);

            // res.forEach((item)=>{})

        });
    }

    getTableDate(res) {
        let userListNew = [];
        // res = JSON.parse(res);
        res.result.forEach(item => {
            userListNew.push({
                key: item.userId,
                userName: item.userName,
                userType: item.userType,
                userIcon: item.userIcon,
                phoneNum: item.phoneNum,
                realName: item.realName
            })

        });
        this.setState({
            userList: userListNew
        });
    }
}

User.propTypes = {};

export default User;
