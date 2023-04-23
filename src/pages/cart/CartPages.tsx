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
    <div className='flex flex-col items-center bg-white px-48'>
      <MainHeader />
      <div className='mt-[180px]' />
      <ShowCart />
      <div className='my-[100px]'></div>
      <MainFooter />
    </div>
  )
}
