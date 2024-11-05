import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Table, Popconfirm, Modal } from 'antd'
import './user.css'
import { getUser } from '../../api'




const User = () => {


    const [listData, setListData] = useState({
        name: ''
    })


    const [tableData, setTableData] = useState([])

    //0 新增, 1 编辑
    const [modalType, setModalType] = useState(0)

    const [isModalOpen, setIsmodalOpen] = useState(false)

    //新增/编辑
    const handleClick = (type, rowData) => {
        console.log(type)
        setIsmodalOpen(isModalOpen => !isModalOpen)

        if (type == 'add') {
            setModalType(0)
        } else {
            setModalType(1)
        }
    }

    //提交
    const handleFinish = (values) => {
        console.log('Success:', values);
        setListData({
            name: values.name
        })
    }

    //删除
    const handleDelete = (rowData) => {

    }

    const getTableData = () => {
        console.log('获取用户列表数据')
        getUser(listData).then(({ data }) => {
            //console.log(res, 'res')
            setTableData(data.list)
        })
    }

    //弹窗确定
    const handleOk = () => {
        setIsmodalOpen(false)
    }

    //弹窗取消
    const handleCancel = () => {
        setIsmodalOpen(false)
    }

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            render: (val) => {
                return val ? '女' : '男'
            }
        },
        {
            title: '出生日期',
            dataIndex: 'birth',
        },
        {
            title: '地址',
            dataIndex: 'addr',
        },
        {
            title: '操作',
            render: (rowData) => {
                return (
                    <div className='flex-box'>
                        <Button style={{ marginRight: '5px' }} onClick={() => handleClick('edit', rowData)}>编辑</Button>
                        <Popconfirm
                            title="提示"
                            description="此操作将删除该用户，是否继续？"
                            okText="确认"
                            cancelText="取消"
                            onConfirm={() => handleDelete(rowData)}
                        >
                            <Button type='primary' danger>删除</Button>
                        </Popconfirm>
                    </div >
                )
            }
        }
    ]


    useEffect(() => {
        //调用后端接口获取用户列表数据
        getTableData()
    }, [])

    return (
        <div className="user">
            <div className='flex-box space-between'>
                <Button type="primary" onClick={() => handleClick('add')}>新增</Button>
                <Form
                    layout="inline"
                    onFinish={handleFinish}
                >
                    <Form.Item name="keyword">
                        <Input placeholder='请输入用户名' />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">搜索</Button>
                    </Form.Item>
                </Form>
            </div>
            <Table columns={columns} dataSource={tableData} rowKey={'id'} />
            <Modal
                open={isModalOpen}
                title={modalType === 0 ? '新增用户' : '编辑用户'}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="确定"
                cancelText="取消"
            >
                123123123
            </Modal>
        </div>
    )
}

export default User