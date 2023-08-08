import React from 'react'
import { PathRouter } from '../../constant/path.router'
import { Breadcrumb } from 'antd'
import { useCustomBreadcrumb } from '../../hook/useCustomBreadcrumb'

export default function AccountSetting() {
  return (
    <div className='px-16'>
      <div className='mt-10 flex w-full justify-center'>
        <p className='text-[24px] font-bold'>THÔNG TIN CỦA TÔI</p>
      </div>
      <div className='w-full py-4'>
        <p className='py-4 text-[14px] font-bold text-black'>Thông Tin</p>
        <p className='pb-2 text-[12px] text-gray-500'>Tên nick:*</p>
        <input
          type='text'
          value='dungnguyen3107'
          className='border-gray-40 w-[400px] border-[1px] px-4 py-1 text-[12px] focus:outline-none'
        />
        <div className='my-4 flex w-[120px] cursor-pointer justify-center bg-black px-4 py-1 text-white'>Lưu</div>
      </div>
    </div>
  )
}
