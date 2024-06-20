import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中，靠<a>跳转不同的页面 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* 在react中靠路由链接实现切换组件 */}
                            {/* 
                            <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink> */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home" >Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path='/about' component={About} />
                                    <Route path='/home' component={Home} />
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
