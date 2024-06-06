import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
    // 对接收的props进行：类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 键盘时间的回调
    handleKeyUp = (event) => {
        // 结构赋值获取keyCode和target
        const { keyCode, target } = event
        // 判断是否按下回车键
        if (keyCode !== 13)
            return
        // 添加的todo名字不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        // 准备好一个todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false }
        // 获取输入框的值
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
