import React, { Component } from 'react'
import Proptypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    // 对接收的props进行：类型、必要性的限制
    static propTypes = {
        todos: Proptypes.array.isRequired,
        updateTodo: Proptypes.func.isRequired,
        deleteTodo: Proptypes.func.isRequired,
    }

    render() {
        // 接收来自App的props数据，其中todos是自己用，updateTodo继续传递给Item
        const { todos, updateTodo, deleteTodo } = this.props

        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}
