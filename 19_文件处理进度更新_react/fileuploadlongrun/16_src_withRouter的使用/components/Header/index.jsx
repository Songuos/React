import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'



class Header extends Component {

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(2)
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>前进2步</button>
            </div>
        )
    }
}

//withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
//withRouter 的返回值是一个经过包裹的新组件
export default withRouter(Header)
