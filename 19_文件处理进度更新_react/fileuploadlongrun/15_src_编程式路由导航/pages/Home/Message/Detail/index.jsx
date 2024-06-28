import React, { Component } from 'react'
// import qs from 'query-string'

const DetailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，世界' },
    { id: '03', content: '你好，地球' },
]



export default class Detail extends Component {

    render() {
        // 接收params参数
        const { id, title } = this.props.match.params


        // 接收search参数
        // const { search } = this.props.location
        // const { id, title } = qs.parse(search.slice(1))

        // 接收state参数
        // const { id, title } = this.props.location.state || {}

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        }) || {}
        console.log(findResult)

        return (
            <div>
                <ul>
                    <li>ID: {id}</li>
                    <li>Title: {title}</li>
                    <li>Content: {findResult ? findResult.content : 'Not Found'}</li>
                </ul>
            </div >
        )
    }
}
