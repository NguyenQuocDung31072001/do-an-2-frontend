import React from 'react'
import { ProfileOutlined } from '@ant-design/icons'
import ShopImage from './component/ShopProfiles/ShopImage'

export default function ShopProfile() {
  return (
    <div className=''>
      <div className='flex items-center py-8'>
        <ProfileOutlined className='mx-4 rounded-[50%] bg-blue-400 p-2 text-white' />
        <div>
          <p className='font-bold'>Hồ sơ Shop</p>
          <p className='text-[12px] font-normal text-gray-400'>Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</p>
        </div>
      </div>
      <div className='h-[1px] w-full bg-gray-300' />
      <ShopImage />
    </div>
  )
}
