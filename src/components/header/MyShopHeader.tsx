import React from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import useCheckScrollDirection, { EnumDirection } from '../../hook/useCheckScrollDirection'
import { useNavigate } from 'react-router-dom'
import { PathRouter } from '../../constant/path.router'
import NotificationHeader from './component/shop_header/NotificationHeader'

export default function MyShopHeader() {
  const [positionHeader, setPositionHeader] = React.useState('0px')
  const { scrollY } = useScroll()
  const { direction } = useCheckScrollDirection()
  const navigate = useNavigate()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 500) {
      if (direction === EnumDirection.UP) {
        setPositionHeader('0px')
      } else {
        setPositionHeader('-200px')
      }
    } else {
      setPositionHeader('0px')
    }
  })
  return (
    <motion.div
      animate={{ translateY: positionHeader }}
      transition={{ duration: 0.2 }}
      className='fixed top-0 z-40 w-full bg-orange-500 py-2'
    >
      <div className='flex w-full items-center justify-between'>
        <div className='text-white'>
          <span className='cursor-pointer opacity-50' onClick={() => navigate(PathRouter.HOME)}>
            Trang chủ
          </span>
          <span>{`> Shop của tôi`}</span>
        </div>
        <div className='flex items-center'>
          <NotificationHeader />
          <img
            src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
            alt=''
            className='mx-4 h-10 w-10 rounded-[50%] object-cover'
          />
        </div>
      </div>
    </motion.div>
  )
}
