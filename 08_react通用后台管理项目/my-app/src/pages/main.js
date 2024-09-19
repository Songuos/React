import React from 'react'
// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import CommonHeader from '../components/commonHeader';
import { Button, Layout, Menu, theme } from 'antd';
import CommonAside from '../components/commonAside'
import { useSelector } from 'react-redux'

const { Header, Sider, Content } = Layout;

export default function Main() {

    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    //获取展开或者收起的状态
    const collapsed = useSelector(state => state.tab.isCollapse)

    return (
        <Layout className='main-container '>
            {/* <Sider trigger={null} collapsible collapsed={collapsed}>
                <h3 className="app-name">通用后台管理系统</h3>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                    style={{ height: '100%' }}
                />
            </Sider> */}
            <CommonAside collapsed={collapsed} />
            <Layout>
                {/* <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        // onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header> */}
                <CommonHeader collapsed={collapsed} />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}
