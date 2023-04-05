import React from 'react'

//component
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import SaleOffAnnouncement from './component/SaleOffAnnouncement'
import FlashSale from './component/FlashSale'
import NewProduct from './component/NewProduct'

export default function HomePages() {
  return (
    <div className='flex flex-col items-center bg-gray-100 px-16'>
      <MainHeader />
      <div className='mt-[180px]' w-full />
      <SaleOffAnnouncement />
      <FlashSale />
      <NewProduct />
      <MainFooter />
    </div>
  )
}
