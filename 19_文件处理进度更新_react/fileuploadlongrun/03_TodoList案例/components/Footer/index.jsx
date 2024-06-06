import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    // 全选checkBox的回调函数
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }


    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props

        // 计算已完成的个数
        const doneCount = todos.reduce(
            (pre, todo) =>
                pre + (todo.done ? 1 : 0)
            , 0)
        // 总数
        const total = todos.length
        console.log('总数：', total)
        console.log('完成个数', doneCount)

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }

}