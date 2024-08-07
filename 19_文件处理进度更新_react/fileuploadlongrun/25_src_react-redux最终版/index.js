/*
    本文件为应用的入口文件
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'


ReactDOM.render(
    // 此处需要用Provider包裹App，目的是让App组件可以使用store
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
