/*
    本文件为所有组件的外壳组件
*/
import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'
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
