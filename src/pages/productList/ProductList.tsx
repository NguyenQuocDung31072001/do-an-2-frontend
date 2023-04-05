import React from 'react'

//component
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import Slogan from './component/Slogan'
import SortProductList from './component/SortProductList'

export default function ProductList() {
  return (
    <div className='flex flex-col items-center bg-white px-16'>
      <MainHeader />
      <div className='mt-[180px]' w-full />
      <Slogan />
      <div className='flex w-full items-center justify-end py-4'>
        <SortProductList />
      </div>
      <MainFooter />
    </div>
  )
}
