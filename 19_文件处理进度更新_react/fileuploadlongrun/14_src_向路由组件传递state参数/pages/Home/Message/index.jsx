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

  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>

                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递state参数 */}
                  <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}> {msgObj.title}</Link>

                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* 声明接收search参数: search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* 声明接收state参数： state参数无需声明接收，正常注册路由即可*/}
        <Route path="/home/message/detail" component={Detail} />


      </div>
    )
  }
}
