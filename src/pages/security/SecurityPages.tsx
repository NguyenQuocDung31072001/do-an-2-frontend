import React from 'react'
import ChangePassword from './component/ChangePassword'
import { PathRouter } from '../../constant/path.router'

export default function SecurityPages() {
  return (
    <div className='px-16'>
      <div className='flex w-full justify-center'>
        <p className='text-[24px] font-bold text-black'>QUẢN LÝ TÀI KHOẢN CỦA TÔI</p>
      </div>
      <div>
        <p className='font-bold text-black'>E-Mail</p>
        <p className='text-[14px] text-gray-500'>dungnguyen310701@gmail.com</p>
        <div className='my-4 flex'>
          <div className='mr-4 flex w-[200px] cursor-pointer justify-center border-[1px] border-black bg-white px-4 py-1 font-semibold text-black duration-200 hover:bg-gray-200'>
            Thay Đổi
          </div>
          <div className='flex w-[200px] cursor-pointer justify-center border-[1px] border-black bg-black px-4 py-1 font-semibold text-white duration-200 hover:bg-black/60'>
            Xác Minh Ngay
          </div>
        </div>
      </div>
      <div className='my-8 h-[1px] w-full bg-gray-300'></div>
      <ChangePassword />
      <div className='my-8 h-[1px] w-full bg-gray-300'></div>
      <div>
        <div className='flex w-full justify-start'>
          <p className='font-bold text-black'>Xóa Tài Khoản</p>
        </div>
        <div className='flex'>
          <p className='text-[14px] text-gray-600'>LƯU Ý: MỘT KHI TÀI KHOẢN BỊ XÓA KHÔNG THỂ ĐƯỢC PHỤC HỒI</p>
        </div>
      </div>
      {/* <div className='my-8 h-[1px] w-full bg-gray-300'></div> */}
    </div>
  )
}
