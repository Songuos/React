import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '写代码', done: false },
            { id: '004', name: '逛街', done: true }
        ]
    }

    // addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {

        // 获取原来的todos
        const { todos } = this.state
        // 追加一个todos
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({ todos: newTodos })
    }

    // updateTodo用于更新一个todo对象
    updateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state
        // 更新todos中对应id的done
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id)
                return { ...todoObj, done }
            else
                return todoObj
        })
        this.setState({ todos: newTodos })
    }

    // deleteTodo用于删除一个todo对象
    deleteTodo = (id) => {
        // 获取原来的todos
        const { todos } = this.state
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        // 更新状态
        this.setState({ todos: newTodos })
    }

    // checkAllTodo把所有todos对象的done属性都统一为done
    checkAllTodo = (done) => {
        // 获取原来的todos
        const { todos } = this.state
        // 加工数据，把所有todo对象的done属性都统一为done
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        this.setState({ todos: newTodos })
    }

    // clearAllDone用于清除所有已完成的todos
    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter(
            (todoObj) => {
                return todoObj.done === false
            })
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                    </div>
                </div>
            </div>
        )
    }
}
