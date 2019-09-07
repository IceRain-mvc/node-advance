import React, {Component} from 'react';
import {Button} from "antd";
import lifeHoc from "../hoc/lifeHoc";

class One extends Component {
    render() {

        console.log(this.props);

        return (
            <div>
                <h1>One</h1>
                <h1>{this.props.myProps}</h1>
                <Button onClick={()=>{
                    this.props.history.push("/two")
                }}>跳转到Two</Button>
            </div>
        );
    }
}

export default lifeHoc(One);
