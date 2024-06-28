import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state = {
    messageArr: [
      { id: '01', title: '消息001' },
      { id: '02', title: '消息002' },
      { id: '03', title: '消息003' },
    ]
  }

  pushShow = (id, title) => {
    // push跳转+携带params参数
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }

  replaceShow = (id, title) => {
    // replace跳转+携带params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }
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
      <div>
        <ul>
          {
            this.state.messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>

                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;
                  <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push查看</button> &nbsp;
                  <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>


                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}


                  {/* 向路由组件传递state参数 */}
                  {/* <Link replace to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}> {msgObj.title}</Link> */}

                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/* 声明接收search参数: search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* 声明接收state参数： state参数无需声明接收，正常注册路由即可*/}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>前进2步</button>
      </div>
    )
  }
}
