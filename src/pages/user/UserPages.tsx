import React from 'react'
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import SideBarNavigation from './component/SideBarNavigation'
import { Outlet } from 'react-router-dom'
export default function UserPages() {
  return (
    <div className='flex flex-col items-center bg-gray-100/50'>
      <MainHeader />
      <div className='mt-[180px]' />
      <div className='my-8 grid w-full grid-cols-12 px-32'>
        <div className='col-span-3'>
          <SideBarNavigation />
        </div>
        <div className='col-span-9'>
          <Outlet />
        </div>
      </div>
      <MainFooter />
    </div>
  )
}
