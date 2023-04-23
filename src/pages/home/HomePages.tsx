import React from 'react'

//component
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import SaleOffAnnouncement from './component/SaleOffAnnouncement'
import FlashSale from './component/FlashSale'
import NewProduct from './component/NewProduct'
import { useNavigate } from 'react-router-dom'
import ChevronRightIcon from '../../icon/chevron/ChevronRightIcon'

export default function HomePages() {
  const navigate = useNavigate()
  //useEffect
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center bg-gray-100/50'>
      <MainHeader />
      <div className='mb-8 flex w-full flex-col items-center px-16'>
        <div className='mt-[180px]' w-full />
        <SaleOffAnnouncement />
        <FlashSale />
        <NewProduct />
        <div
          className='group mt-4 flex cursor-pointer items-center justify-center border-[1px] border-black/80 px-8 py-2'
          onClick={() => navigate('product-list')}
        >
          <p className=' font-semibold group-hover:scale-105'>Xem tất cả </p>
          <ChevronRightIcon className='ml-2 h-4 w-4  group-hover:scale-x-125' />
        </div>
      </div>
      <MainFooter />
    </div>
  )
}
