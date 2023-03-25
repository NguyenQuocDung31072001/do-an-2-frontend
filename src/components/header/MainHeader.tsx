import React from 'react'
//assets
import free_ship_image from '../../assets/free_ship.png'
import InfoUser from './component/InfoUser'

//component
import ShippingInfo from './component/ShippingInfo'

//framed-motion
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

const categories = ['NỮ', 'NAM', 'ĐỜI SỐNG']
export default function MainHeader() {
  const { scrollY } = useScroll()
  // useMotionValueEvent(scrollY, 'change', (latest) => {
  //   console.log('Page scroll: ', latest)
  // })
  const headerOpacity = useTransform(
    scrollY,
    [0, 100], // Thay đổi giá trị này để điều chỉnh vị trí hiển thị header
    [1, 0]
  )
  return (
    <motion.div
      style={{ opacity: headerOpacity }}
      className=' top-[0px] flex w-full flex-col items-center justify-center bg-red-100'
    >
      <div>
        <img src={free_ship_image} className='h-[50px] object-cover' />
      </div>
      <div className='grid w-full grid-cols-12  bg-gray-100'>
        <div className='col-span-5 flex items-center justify-start'>
          {categories.map((categoryItem, index) => (
            <p className='cursor-pointer px-2 py-4 font-medium text-gray-600' key={categoryItem}>
              {categoryItem}
            </p>
          ))}
        </div>
        <div className='col-span-2 flex items-center justify-center font-semibold text-gray-800'>Đồ án 2</div>
        <div className='col-span-2 flex items-center justify-start'>
          <ShippingInfo />
        </div>
        <div className='col-span-3 flex items-center justify-start'>
          <InfoUser />
        </div>
      </div>
    </motion.div>
  )
}
