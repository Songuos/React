import React, { Component } from 'react'


export default class Person extends Component {


    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const person = {
            name,
            age
        }
    }

    render() {
        return (
            <div>
                <input ref={input => this.nameNode = input} type="text" placeholder='姓名' />
                <input ref={input => this.ageNode = input} type="text" placeholder='年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <li>姓名1--年龄1</li>
                    <li>姓名2--年龄2</li>
                    <li>姓名3--年龄3</li>
                </ul>
            </div >
        )
    }
}
