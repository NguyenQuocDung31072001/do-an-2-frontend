import React from 'react'

//component
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import SaleOffAnnouncement from './component/SaleOffAnnouncement'
import FlashSale from './component/FlashSale'

export default function HomePages() {
  return (
    <div className='flex flex-col items-center bg-gray-100 px-16'>
      <MainHeader />
      <SaleOffAnnouncement />
      <FlashSale />
      {Array(50)
        .fill(0)
        .map((_, index) => {
          return (
            <div key={index} className='p-10'>
              {index}
            </div>
          )
        })}
      <MainFooter />
    </div>
  )
}
