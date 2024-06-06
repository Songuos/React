import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {


    // 初始化一个标识，用来标记鼠标移入、移出的状态
    state = { mouse: false }

    // 勾选、取消勾选某个todo的回调函数，这个函数的返回值是一个函数
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 鼠标移入、移出的回调函数，这个函数的输入是一个布尔值，返回值是一个函数
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    //删除一个todo的回调函数
    handleDelete = (id) => {
        if (window.confirm('确定删除吗？')) {
            // 删除
            this.props.deleteTodo(id)
        }

    }


    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
                <label >
                    {/* done是变量，值是true或者false */}
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span> {name} </span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
