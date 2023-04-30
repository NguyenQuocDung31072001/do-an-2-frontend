import React from 'react'
import InputPassword from '../../../components/input/InputPassword'

export default function ChangePassword() {
  const [openChangePassword, setOpenChangePassword] = React.useState<boolean>(false)
  return (
    <div>
      <div className='flex w-full justify-start'>
        <p className='font-bold text-black'>Đổi Mật Khẩu</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-gray-500'>********</p>
        {!openChangePassword && (
          <div
            className='mr-4 flex w-[120px] cursor-pointer justify-center border-[1px] border-black bg-white px-4 py-1 text-[14px] font-semibold text-black duration-200 hover:bg-gray-200'
            onClick={() => setOpenChangePassword(true)}
          >
            Thay Đổi
          </div>
        )}
      </div>
      {openChangePassword && (
        <div>
          <div className='my-4'>
            <InputPassword title='Mật khẩu cũ:' />
          </div>
          <div className='mb-4'>
            <InputPassword title='Mật khẩu:' />
          </div>
          <div>
            <InputPassword title='Xác Nhận Mật Khẩu:' />
          </div>
          <div className='my-4 flex'>
            <div
              className='mr-4 flex w-[140px] cursor-pointer justify-center border-[1px] border-black bg-white px-4 py-1 font-semibold text-black duration-200 hover:bg-gray-200'
              onClick={() => setOpenChangePassword(false)}
            >
              Hủy
            </div>
            <div className='flex w-[140px] cursor-pointer justify-center border-[1px] border-black bg-black px-4 py-1 font-semibold text-white duration-200 hover:bg-black/60'>
              Xác Nhận
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
