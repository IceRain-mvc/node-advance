import React, {Component} from 'react';
import {Button} from "antd";

class Three extends Component {
    render() {
        console.log(this.props.myProps);
        return (
            <div>
                <h1>Three</h1>
                <h1></h1>
            </div>
        );
    }
}

export default Three;
