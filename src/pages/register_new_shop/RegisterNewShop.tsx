import { Button, Divider, Form, Steps } from 'antd'
import React from 'react'
import ShopInfo from './component/ShopInfo'
import ActionButton from './component/ActionButton'
import ShippingSetting from './component/ShippingSetting'
import PostProductForSale from './component/PostProductForSale'

export default function RegisterNewShop() {
  const [current, setCurrent] = React.useState(0)
  const [form] = Form.useForm()

  return (
    <div className='flex w-full justify-center bg-gray-100'>
      <div className='w-full max-w-[80%] bg-white px-8 py-16 shadow-lg'>
        <Steps
          size='small'
          progressDot
          current={current}
          items={[
            {
              title: 'Cài đặt thông tin cửa hàng'
            },
            {
              title: 'Cài đặt vận chuyển'
            },
            {
              title: 'Đăng bán sản phẩm'
            }
          ]}
        />
        <Divider />
        <Form form={form} name='register_new_shop' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          {current === 0 && <ShopInfo />}
          {current === 1 && <ShippingSetting />}
          {current === 2 && <PostProductForSale />}
          <ActionButton form={form} current={current} setCurrent={setCurrent} />
        </Form>
      </div>
    </div>
  )
}
