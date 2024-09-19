import React from 'react'
import './index.css'

//如何获取展开收起的初始状态
import { } from 'react-redux'

import { Button, Layout, Avatar, Dropdown } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
const { Header } = Layout;

const CommonHeader = ({ collapsed }) => {
    //登出函数
    const logout = () => { }

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    个人中心
                </a>
            )
        },
        {
            key: '2',
            label: (
                <a onClick={() => logout} target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            )
        }
    ]

    //点击展开收起按钮
    const setCollapsed = () => { }

    return (
        <Header className='header-container'>
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                // onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
            />
            <Dropdown menu={{ items }}>
                <Avatar size={36} src={
                    <img src={require("../../assets/images/user.png")} />
                } />
            </Dropdown>

        </Header>
    )
}




export default CommonHeader