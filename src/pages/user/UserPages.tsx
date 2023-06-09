import React from 'react'
import SideBarNavigation from './component/SideBarNavigation'
import { Outlet } from 'react-router-dom'

export default function UserPages() {
  return (
    <div className='my-8 grid w-full grid-cols-12 px-32'>
      <div className='col-span-3'>
        <SideBarNavigation />
      </div>
      <div className='col-span-9'>
        <Outlet />
      </div>
    </div>
  )
}
