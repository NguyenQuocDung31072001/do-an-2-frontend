import React from 'react'
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import ImageShow from './component/ImageShow'
import DetailProduct from './component/DetailProduct'

export default function ProductDetail() {
  return (
    <div className='flex flex-col items-center bg-white px-48'>
      <MainHeader />
      <div className='mt-[180px]' />

      <div className='grid w-full grid-cols-9'>
        <div className='col-span-5 h-4 w-full'>
          <ImageShow />
        </div>
        <div className='col-span-4 ml-8 h-4 w-full'>
          <DetailProduct />
        </div>
      </div>
      <MainFooter />
    </div>
  )
}
