import React, {Component} from 'react';
import {
    DatePicker,
    Button, Steps, Table

} from "antd";


let {Step} = Steps;

const columns = [
    {
        title: "姓名",
        dataIndex: "name",
        key: "name",

    },
    {
        title: "年龄",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "性别",
        dataIndex: "sex",
        key: "sex",
    },
    {
        title: "操作",
        dataIndex: "opera",
        key: "opera",
        render: text => <a href="javascript:void(0)" >删除</a>
    }


];


const dataTable = [

    {
        key: '1',
        name: 'John Brown',
        age: 32,
        sex: 'New York No. 1 Lake Park',
    },

    {
        key: '2',
        name: 'John Brown',
        age: 32,
        sex: 'New York No. 1 Lake Park',
    },

    {
        key: '1',
        name: 'John Brown',
        age: 32,
        sex: 'New York No. 1 Lake Park',
    },

    {
        key: '3',
        name: 'John Brown',
        age: 32,
        sex: 'New York No. 1 Lake Park',
    }

];


class Antddemo extends Component {


    render() {
        return (
            <div>
                <DatePicker/>
                <Button type="primary">hahaha</Button>
                <Button type="danger">hahaha</Button>
                <Button type="dashed">hahaha</Button>
                <Button type="link">hahaha</Button>

                <Steps current={1}>
                    <Step title="Finished" description="This is a description."/>
                    <Step title="In Progress" description="This is a description."/>
                    <Step title="Waiting" description="This is a description."/>
                </Steps>


                <Table columns={columns} dataSource={dataTable} pagination={false} bordered/>

            </div>
        );
    }
}

export default Antddemo;
