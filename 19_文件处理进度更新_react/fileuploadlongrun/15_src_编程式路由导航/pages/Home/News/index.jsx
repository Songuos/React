import React, { Component } from 'react'

export default class News extends Component {

    // componentDidMount() {
    //     console.log('News组件挂载完毕了');
    //     setTimeout(() => {
    //         this.props.history.push('/home/message')
    //     }, 2000)
    // }

    render() {
        return (
            <div>
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
            </div>
        )
    }
}
