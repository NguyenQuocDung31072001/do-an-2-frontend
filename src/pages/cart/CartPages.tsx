import React from 'react'
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import CheckboxButton from '../../components/button/CheckBoxButton'
import ShowCart from './component/ShowCart'

export default function CartPages() {
  //useEffect
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center bg-gray-100/50'>
      <MainHeader />
      <div className='mt-[180px]' />
      <div className='flex w-full flex-col items-center px-48 pb-8'>
        <ShowCart />
      </div>
      <MainFooter />
    </div>
  )
}
