import React from "react";


export default function lifeHoc(MyComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

        }

        componentDidMount() {
            if (window.localStorage.getItem("token")) {

            } else {
                // this.props.history.push("/login")
            }
        }

        render() {
            return (
                <>
                    <MyComponent history={this.props.history} myProps={"巴拉巴拉小魔仙"}/>

                </>
            );
        }

    }
}
