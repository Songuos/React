import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'
//引入actionCreator，专门用于创建action对象


export default class Count extends Component {


    // // state = { count: 0 }
    // componentDidMount() {
    //     //订阅redux中状态的变化，只要状态发生变化，就调用回调函数
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }


    increment = () => {
        const { value } = this.selectNumber
        // const { count } = this.state
        // this.setState({ count: count + value * 1 })
        // 通知redux加value
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }

    //当前和为奇数时再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (store.getState() % 2 === 1) {

            store.dispatch(createIncrementAction(value * 1))
        }
    }

    //异步加
    incrementAsync = () => {

        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1))
        }, 500)
    }




    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                &nbsp;
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
