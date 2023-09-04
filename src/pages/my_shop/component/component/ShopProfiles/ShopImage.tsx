import React from 'react'
import { CameraOutlined } from '@ant-design/icons'

export default function ShopImage() {
  const [imgBg, setImgBg] = React.useState<string>(
    'https://down-ws-vn.img.susercontent.com/22f22c9a3acf24a3788af6e2107d03f7_tn'
  )
  const [imgAvatar, setImgAvatar] = React.useState<string>(
    'https://down-ws-vn.img.susercontent.com/3a62bcc59eb8317e7674ffdb87b23329_tn'
  )

  return (
    <div className='relative w-80'>
      <div className='relative'>
        <img src={imgBg} alt='' className='h-64 w-80 object-cover' />
        <div className='absolute top-2 right-2 flex cursor-pointer items-center rounded-[10px] bg-black/30 py-1 px-4 text-[10px] font-semibold text-white duration-300 hover:bg-black/80 '>
          <CameraOutlined className='mr-2' />
          Sửa ảnh bìa
        </div>
        <span className='absolute bottom-4 left-[50%] -translate-x-[50%] text-[12px] font-semibold text-white'>
          Đã tham gia 10 tháng trước
        </span>
        <span className='absolute -bottom-10 left-[50%] -translate-x-[50%] text-[12px] font-semibold'>
          60 Đang theo 87 Người theo
        </span>
      </div>
      <div className='absolute -bottom-5 left-4'>
        <div className='relative h-14 w-14 overflow-hidden rounded-[50%]'>
          <img src={imgAvatar} alt='' className='h-14 w-14 rounded-[50%] object-cover' />
          <div className='absolute -bottom-1 left-[50%] -translate-x-[50%] cursor-pointer bg-black/30 py-1 px-4 text-[10px] font-semibold text-white duration-300 hover:bg-black/80'>
            Sửa
          </div>
        </div>
      </div>
    </div>
  )
}
