import React, { Component } from 'react'
import { createAddPersonAction } from '../../redux/actions/person'
import { nanoid } from 'nanoid'
// import { ADD_PERSON } from '../../redux/constant'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'


class Person extends Component {


    //获取页面上输入框的值并包装为person对象
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {
            id: nanoid(),
            name,
            age
        }
        this.props.addperson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>Person组件</h2>
                <h4>上方组件求和为：{this.props.count}</h4>
                <input ref={input => this.nameNode = input} type="text" placeholder='姓名' />
                <input ref={input => this.ageNode = input} type="text" placeholder='年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.yiduiren.map((p) => {
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div >
        )
    }
}

export default connect(
    //前面的state是redux保存的总状态对象
    state => ({ count: state.he, yiduiren: state.rens }),
    { addperson: createAddPersonAction }
)(Person)
