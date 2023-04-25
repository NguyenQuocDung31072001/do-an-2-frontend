import React from 'react'
import { CartMockData } from '../../mocks/cart/CartMockData'
import ReactDOM from 'react-dom'
import CheckboxButton from '../button/CheckBoxButton'
import { useNavigate } from 'react-router-dom'
import { QuantityController } from './QuantityController'
import { convertToVNPrice } from '../../utils/string'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import useCheckScrollDirection, { EnumDirection } from '../../hook/useCheckScrollDirection'

export default function MiniCart() {
  const [positionHeader, setPositionHeader] = React.useState('0px')
  const navigate = useNavigate()
  const root = document.getElementById('root') as HTMLElement
  const totalPrice = 0

  const { scrollY } = useScroll()
  const { direction } = useCheckScrollDirection()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 500) {
      if (direction === EnumDirection.UP) {
        setPositionHeader('0px')
      } else {
        setPositionHeader('-110px')
      }
    } else {
      setPositionHeader('0px')
    }
  })

  return ReactDOM.createPortal(
    <motion.div
      animate={{ translateY: positionHeader }}
      transition={{ duration: 0.2 }}
      className='fixed top-[105px] right-0 z-50  w-[380px] bg-white p-4 shadow-xl'
    >
      <div className=' max-h-[500px] overflow-y-scroll'>
        <div className='flex w-[100px]'>
          <CheckboxButton id='mini-cart' title='' />
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-4 w-4 font-bold'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
              />
            </svg>
            <p className='text-[14px] font-bold'>Đồ án 2</p>
          </div>
        </div>
        {CartMockData.map((data, index) => {
          return (
            <div key={index} className='my-3 flex '>
              <CheckboxButton id='mini-cart' title='' />
              <div className='my-3 flex'>
                <div className='relative mr-4'>
                  <img src={data.image} alt='' className='h-[120px] w-[120px] object-cover' />
                  <div className='absolute bottom-0 flex w-full items-center justify-center bg-orange-400 py-1 text-[12px] text-white'>
                    chỉ có {data.quantity} cái
                  </div>
                </div>
                <div>
                  <p
                    className='cursor-pointer text-[12px] text-gray-400'
                    onClick={() => {
                      navigate('/product-detail')
                    }}
                  >
                    {data.productName}
                  </p>
                  <p className='text-[14px] font-semibold text-black'>{convertToVNPrice(data.price)}</p>
                  <div className='mt-4 flex items-center justify-between'>
                    <QuantityController />
                    <div className='flex w-[130px] items-center '>
                      <p className='text-[12px] text-gray-500'>Tổng cộng:</p>
                      <p className='text-[12px] font-semibold text-black'>{convertToVNPrice(data.price)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex items-center justify-between pr-4'>
        <CheckboxButton id='mini-cart' title='Tất cả' />
        <div className='flex items-center'>
          <p className='text-[14px] text-gray-500'>Tổng cộng:</p>
          <p>{convertToVNPrice(totalPrice)}</p>
        </div>
      </div>
      <div
        className='mt-4 flex cursor-pointer items-center justify-center bg-black py-2 text-white'
        onClick={() => navigate('/cart')}
      >
        <p>Xem giỏ hàng</p>
      </div>
    </motion.div>,
    root
  )
}
