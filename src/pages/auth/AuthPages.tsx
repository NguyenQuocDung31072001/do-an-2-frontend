import React from 'react'
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import AuthComponent from '../../components/auth/AuthComponent'

export default function AuthPages() {
  return (
    <div className='flex flex-col items-center bg-gray-100/50'>
      <MainHeader />
      <div className='mt-[180px]' />
      <div className='mt-8 mb-16 flex w-full flex-col items-center px-52 pb-8'>
        <AuthComponent />
      </div>
      <MainFooter />
    </div>
  )
}
