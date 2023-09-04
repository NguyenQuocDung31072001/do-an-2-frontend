import { CheckCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

export default function PostProductForSale() {
  return (
    <div className='flex flex-col items-center'>
      <CheckCircleFilled className='text-[48px] text-green-400' />
      <p className='my-4 text-[24px] font-medium'>Đăng kí thành công</p>
      <p>Hãy đăng bán sản phẩm đầu tiên để khởi động hành trình bán hàng cùng Shop nhé !</p>
      <Button className='my-4' type='primary' danger>
        Thêm sản phẩm
      </Button>
    </div>
  )
}
