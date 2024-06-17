import React, { Component } from 'react'
import PubSub from 'pubsub.js'
import './index.css'

export default class List extends Component {

    //初始化状态，users初始值为数组
    state = {
        users: [],//users初始值为数组
        isFirst: true,//是否为第一次打开页面
        isLoading: false,//标识是否处于加载中     
        err: ''//存储请求相关的错误信息
    }

    // 在组件挂载时订阅搜索事件
    componentDidMount() {
        this.token = PubSub.subscribe('search', (msg, stateObj) => {
            // 更新组件状态
            this.setState(stateObj)
        })
    }

    // 在组件卸载时取消订阅
    componentWillUnmount() {
        // 取消订阅
        PubSub.unsubscribe(this.token)
    }

    render() {

        const { users, isFirst, isLoading, err } = this.state

        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>Loading...</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a rel="noreferrer" href={userObj.html_url} target="_blank" >
                                                <img alt="head_protrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
