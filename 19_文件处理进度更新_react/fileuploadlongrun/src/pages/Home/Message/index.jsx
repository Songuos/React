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
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <Route path="/home/message/detail/:id/:title" component={Detail} />

      </div>
    )
  }
}
