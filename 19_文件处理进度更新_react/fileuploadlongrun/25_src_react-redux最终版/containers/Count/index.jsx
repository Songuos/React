import React, { Component } from 'react'
import {
    decrement,
    increment,
    incrementAsync
} from '../../redux/actions/count'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'


class Count extends Component {

    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value * 1)
    }

    //当前和为奇数时再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }

    //异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        return (
            <div>
                <h2>Count组件</h2>
                <h4>当前求和为：{this.props.count}，下方组件总人数为：{this.props.renshu}</h4>
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


/*
    1.使用connect()()创建并暴露一个Count的容器组件
    2.connect(mapStateToProps, mapDispatchToProps)(CountUI)
*/
export default connect(

    //mapStateToProps的简写
    state => ({
        count: state.count,
        renshu: state.persons.length
    }),

    //mapDispatchToProps的简写
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)