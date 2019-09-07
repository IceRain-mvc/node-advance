import React, {Component, useState,useEffect} from 'react';

class Day190829 extends Component {
    render() {
        return (
            <div>
                <HookState/>
            </div>
        );
    }
}

function HookState() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(2);
    const [obj, setObj] = useState({name: {num: 1}});
    window.useState = useState;

    useEffect(() => {
        console.log("111");
        document.title = "hello cuilibao";

    });

    return <>
        <p>{count}</p>
        <p>{obj.name.num}</p>
        <button onClick={() => {
            setCount(count + 1);
            setNum(num + 1);

            setObj({name: {num: num + 1}})
        }}>按钮 获取State
        </button>
    </>
}


export default Day190829;
