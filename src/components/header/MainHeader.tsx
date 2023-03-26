import React from 'react'
//assets
import free_ship_image from '../../assets/free_ship.png'
import InfoUser from './component/InfoUser'

//component
import ShippingInfo from './component/ShippingInfo'

//framer-motion
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

//hook
import useCheckScrollDirection, { EnumDirection } from '../../hook/useCheckScrollDirection'

const categories = ['NỮ', 'NAM', 'ĐỜI SỐNG']

export default function MainHeader() {
  //hook
  const [positionHeader, setPositionHeader] = React.useState('0px')
  const { scrollY } = useScroll()
  const { direction } = useCheckScrollDirection()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 500) {
      if (direction === EnumDirection.UP) {
        setPositionHeader('0px')
      } else {
        setPositionHeader('-100px')
      }
    } else {
      setPositionHeader('0px')
    }
  })

  return (
    <motion.div
      animate={{ translateY: positionHeader }}
      transition={{ duration: 0.2 }}
      className='fixed top-[0px] z-50 flex w-full flex-col items-center justify-center bg-red-100'
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
