import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Table } from 'antd'
import * as Icon from '@ant-design/icons'
import './home.css'
import { getData } from '../../api'
import MyEcharts from '../../components/Echarts'

//table列的数据
const columns = [
    {
        title: '课程',
        dataIndex: 'name'
    },
    {
        title: '今日购买',
        dataIndex: 'todayBuy'
    },
    {
        title: '本月购买',
        dataIndex: 'monthBuy'
    },
    {
        title: '总购买',
        dataIndex: 'totalBuy'
    }
]

//订单统计数据
const countData = [
    {
        "name": "今日支付订单",
        "value": 1234,
        "icon": "CheckCircleOutlined",
        "color": "#2ec7c9"
    },
    {
        "name": "今日收藏订单",
        "value": 3421,
        "icon": "ClockCircleOutlined",
        "color": "#ffb980"
    },
    {
        "name": "今日未支付订单",
        "value": 1234,
        "icon": "CloseCircleOutlined",
        "color": "#5ab1ef"
    },
    {
        "name": "本月支付订单",
        "value": 1234,
        "icon": "CheckCircleOutlined",
        "color": "#2ec7c9"
    },
    {
        "name": "本月收藏订单",
        "value": 3421,
        "icon": "ClockCircleOutlined",
        "color": "#ffb980"
    },
    {
        "name": "本月未支付订单",
        "value": 1234,
        "icon": "CloseCircleOutlined",
        "color": "#5ab1ef"
    }
]

//动态获取icon
const iconToElement = (name) => React.createElement(Icon[name])

const Home = () => {
    const userImg = require("../../assets/images/user.png")

    //创建echart响应数据
    const [echartData, setEchartData] = useState(null)//初始化为null以避免错误
    const [tableData, setTableData] = useState([])//定义table数据

    //空数组表示在页面第一次加载的时候，只执行一次，表示dom首次渲染完成
    useEffect(() => {
        getData().then(({ data }) => {

            const { tableData, orderData } = data.data
            setTableData(tableData)//设置table数据

            //对于echarts数据的组装
            const order = orderData
            const xData = order.date//x轴的数据

            //获取order.data的键名（例如：苹果、vivo等）
            const keyArray = Object.keys(order.data[0])

            console.log('keyArray:', keyArray);  // 打印确认key
            //series数据组装
            const series = keyArray.map(key => ({
                name: key,
                data: order.data.map(item => item[key]),
                type: 'line'
            }))

            // keyArray.forEach(key => {
            //     series.push({
            //         name: key,
            //         data: order.data.map(item => item[key]),
            //         type: 'line'
            //     })
            // })

            //设置Echarts数据
            setEchartData({
                order: {
                    xData,
                    series
                }
            })
        })
    }, [])

    return (
        <Row className='home'>
            <Col span={8}>
                <Card hoverable>
                    <div className='user'>
                        <img src={userImg} />
                        <div className='userinfo'>
                            <p className='name'>Admin</p>
                            <p className='access'>超级管理员</p>
                        </div>
                    </div>
                    <div className='login-info'>
                        <p>上次登陆时间：<span>2021-7-19</span></p>
                        <p>上次登陆地点：<span>南京</span></p>
                    </div>
                </Card>
                <Card>
                    <Table rowKey={"name"} columns={columns} dataSource={tableData} pagination={false} />
                </Card>

            </Col>
            <Col span={16}>
                <div className="num">
                    {
                        countData.map((item, index) => {
                            return (
                                <Card key={index}>
                                    <div className="icon-box" style={{ background: item.color }}>
                                        {iconToElement(item.icon)}
                                    </div>
                                    <div className="detail">
                                        <p className="num">¥{item.value}</p>
                                        <p className="txt">{item.name}</p>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
                {echartData && echartData.order && (
                    <MyEcharts echartData={echartData.order} style={{ height: '300px' }} />
                )}
            </Col>

        </Row>
    )
}

export default Home