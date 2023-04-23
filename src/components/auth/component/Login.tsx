import React from 'react'

export default function Login() {
  return (
    <div className='w-full'>
      <div className='my-4 flex w-full items-center justify-center text-[18px] font-bold'>Đăng nhập </div>
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
      <div className='mt-4 flex cursor-pointer items-center justify-center bg-black py-2 text-[18px] font-bold text-white hover:bg-black/80 '>
        Đăng nhập
      </div>
      <div className='my-2 flex w-full justify-center'>
        <p className='cursor-pointer text-[12px] text-gray-700'>Quên mật khẩu?</p>
      </div>
      <div className='relative my-4 flex items-center justify-center'>
        <div className='z-50 bg-white'>
          <p className='text-[12px] text-gray-400'>Hoặc</p>
        </div>
        <div className='absolute top-[50%] h-[1px] w-full bg-gray-300'></div>
      </div>
      <div className='mt-4 flex cursor-pointer items-center justify-center border-[1px] border-gray-300 bg-gray-100 py-2 text-[14px] font-bold text-gray-500 hover:bg-gray-200/70 '>
        <img src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' alt='' className='mr-8 h-4 w-4' />
        Đăng nhập bằng Google
      </div>
      <div className='mt-4 flex cursor-pointer items-center justify-center border-[1px] border-gray-300 bg-gray-100 py-2 text-[14px] font-bold text-gray-500 hover:bg-gray-200/70 '>
        <img src='https://cdn-icons-png.flaticon.com/512/145/145802.png' alt='' className='mr-4 h-4 w-4' />
        Đăng nhập bằng Facebook
      </div>
      <div className='mt-8 flex text-[12px] text-gray-600'>
        <p className=''>
          Bằng cách đăng nhập vào tài khoản của bạn, bạn đồng ý với
          <a className='mx-1 cursor-pointer text-blue-400'>Chính sách bảo mật & Cookie và Điều khoản và Điều kiện</a>
          của chúng tôi.
        </p>
      </div>
      <div className='my-2 flex w-full items-center justify-center text-[12px] text-red-500'>
        ĐĂNG NHẬP ĐỂ NHẬN THÊM ƯU ĐÃI
      </div>
      <div className='flex w-full items-center justify-center text-[12px] text-black'>
        xác nhận và kiếm thêm
        <span className='mx-1 text-red-500'>100</span>
        điểm
      </div>
    </div>
  )
}
