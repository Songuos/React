import React from 'react'
import { Col, Row, Card } from 'antd'
import './home.css'

export default function Home() {
    const userImg = require("../../assets/images/user.png")
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

            </Col>
            <Col span={16}>
            </Col>

        </Row>
    )
}
