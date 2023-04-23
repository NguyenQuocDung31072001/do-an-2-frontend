import React from 'react'

export default function Register() {
  return (
    <div className='w-full'>
      <div className='my-4 flex w-full items-center justify-center text-[18px] font-bold'>Mới Đến SHOP</div>
      <p className='text-[12px] text-gray-500'>Vị trí: VietNam</p>
      <p className='mt-4 text-[12px] text-gray-500'>Số điện thoại di động hoặc địa chỉ email:</p>
      <input
        type='text'
        className='w-full border-[1px] border-gray-300 p-2  text-[12px] text-black hover:border-black focus:border-black focus:outline-none'
      />
      <p className='mt-4 text-[12px] text-gray-500'>Mật khẩu:</p>
      <input
        type='text'
        className='w-full border-[1px] border-gray-300 p-2  text-[12px] text-black hover:border-black focus:border-black focus:outline-none'
      />
      <p className='mt-4 text-[12px] text-gray-500'>Xác nhận mật khẩu:</p>
      <input
        type='text'
        className='w-full border-[1px] border-gray-300 p-2  text-[12px] text-black hover:border-black focus:border-black focus:outline-none'
      />
      <div className='mt-4 flex cursor-pointer items-center justify-center bg-black py-2 text-[18px] font-bold text-white hover:bg-black/80 '>
        Đăng ký
      </div>
      <div className='mt-8 flex justify-center text-[12px] text-red-500'>GIẢM THÊM 15% CHO ĐƠN HÀNG ĐẦU TIÊN</div>
    </div>
  )
}
