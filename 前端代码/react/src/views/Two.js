import React, {Component} from 'react';
import {Button} from "antd";
import lifeHoc from "../hoc/lifeHoc";

class Two extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <h1>Two</h1>
                <h1>{this.props.myProps}</h1>
                <Button onClick={() => {
                    this.props.history.push("/three")
                }}>跳转到Three</Button>
            </>
        );
    }
}

export default lifeHoc(Two);
