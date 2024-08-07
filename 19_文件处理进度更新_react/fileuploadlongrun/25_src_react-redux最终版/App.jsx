/*
    本文件为所有组件的外壳组件
*/
import React, { Component } from 'react'
import Count from './containers/Count' //引入Count的容器组件
import Person from './containers/Person' //引入Person的容器组件
// import store from './redux/store'


export default class App extends Component {
    render() {
        return (
            <div>
                {/* 不给容器组件传递store */}
                <Count />
                <hr />
                <Person />
            </div>
        )
    }
}
