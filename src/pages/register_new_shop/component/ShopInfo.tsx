import { Form, Input } from 'antd'
import React from 'react'

type FieldType = {
  shop_name: string
  shop_address: string
  email: string
  phone_number: string
}
export default function ShopInfo() {
  return (
    <div className='flex w-full justify-center '>
      <div className='w-full max-w-[60%]'>
        <Form.Item<FieldType>
          label='Shop name'
          name='shop_name'
          rules={[{ required: true, message: 'Shop name is required!' }]}
        >
          <Input style={{ width: 400 }} placeholder='Shop name' />
        </Form.Item>

        <Form.Item<FieldType>
          label='Shop address'
          name='shop_address'
          rules={[{ required: true, message: 'Shop address is required!' }]}
        >
          <Input style={{ width: 400 }} placeholder='Shop address' />
        </Form.Item>

        <Form.Item<FieldType>
          initialValue='dungnguyen123456@gmail.com'
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Shop address is required!' }]}
        >
          <Input style={{ width: 400 }} disabled />
        </Form.Item>
        <Form.Item<FieldType>
          initialValue='0373110228'
          label='Phone number'
          name='phone_number'
          rules={[{ required: true }]}
        >
          <Input style={{ width: 400 }} disabled />
        </Form.Item>
      </div>
    </div>
  )
}
