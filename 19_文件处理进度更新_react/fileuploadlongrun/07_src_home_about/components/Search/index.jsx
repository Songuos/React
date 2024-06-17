import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        // 获取用户的输入
        const { keyWordElement: { value: keyWord } } = this

        // 发送请求前通知App更新状态
        PubSub.publish('search', { isFirst: false, isLoading: true, err: '' })

        // 发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                //请求成功后通知App更新状态
                PubSub.publish('search', { users: response.data.items, isFirst: false, isLoading: false, err: '' })
            },
            error => {
                // 请求失败后通知App更新状态
                PubSub.publish('search', { users: [], isFirst: false, isLoading: false, err: error.message })
            }
        )
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.search()
        }
    }

    render() {
        return (
            <section className="jumbotron">
                < h3 className="jumbotron-heading" > 搜索Github用户</h3 >
                <div>
                    <input ref={c => this.keyWordElement = c} onKeyPress={this.handleKeyPress} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section >
        )
    }
}
