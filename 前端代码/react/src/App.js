import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"


/*同步*/
import AllUser from "./views/AllUser";
import Group from "./views/Group";
import GroupMember from "./views/GroupMember";
import Antddemo from "./views/Antddemo";
import Login from "./views/Login";
import User from "./views/User";
import One from "./views/One";
import Two from "./views/Two";
import Three from "./views/Three";
import Day190829 from "./views/Day190829";
import Day0906 from "./views/Day0906";
import Day190906 from "./views/Day190906";
// const  AllUser = React.lazy(() => import("./views/AllUser"));
// const Group = React.lazy(() => import('./views/Group'));
// const GroupMember = React.lazy(() => import('./views/GroupMember'));

/*异步组件*/


/*
* http://localhost:7001/#/home 不能跟服务器交互   http://localhost:7001/home:服务器会收到路径
* */
function App() {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/alluser" component={AllUser}/>
                        <Route path="/group" component={Group}/>
                        <Route path="/groupmember" component={GroupMember}/>
                        <Route path="/antdDemo" component={Antddemo}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/user" component={User}/>

                        <Route path="/one" component={One}/>
                        <Route path="/two" component={Two}/>
                        <Route path="/three" component={Three}/>
                        <Route path="/day190829" component={Day190829}/>
                        <Route path="/day0906" component={Day0906}/>
                        <Route path="/day190906" component={Day190906}/>

                        <Redirect from="/" to="/day190906"/>
                    </Switch>
                </Suspense>

            </Router>

        </div>
    );
}

export default App;
