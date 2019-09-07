import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    /*
    * 头部
    *
    * <    中间的文字    右边的文字
    *
    * */


    state = {
        title: "标题",
        isShowRight: false
    };


    render() {
        let title = this.props.title;
        return (
            <div>
                {/*返回按钮 */}
                <h1>{title || this.state.title}</h1>
                {/*右边 */}

                {/*右边的 文字 可以点击*/}

                {/*
                    传过来的值  改变内容
                    内部

                    1:接收父组件传过来的值
                    2:改变内部状态
                */}
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
