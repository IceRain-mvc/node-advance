import React from "react";
import Header from "../components/Header";

class AllUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: "哈哈哈哈"
        };

    }

    render() {
        return (
            <>
                <Header title={"首页"} showRight={true}/>
                <h1>所有用户</h1>
                {this.state.msg}
            </>
        );
    }
}

AllUser.propTypes = {};

export default AllUser;
