import React from 'react'
import { Button, Form } from 'antd'




const User = () => {

    //新增
    const handleClick = (type) => {
        console.log(type)
    }

    //提交
    const handleFinish = (values) => {
        console.log('Success:', values);
    }

    return (
        <div className="user">
            <div className="flex-box">
                <Button type="primary" onClick={() => handleClick('add')}>新增</Button>
                <Form
                    layout="inline"
                    onFinish={handleFinish}>

                </Form>
            </div>
        </div>
    )
}

export default User