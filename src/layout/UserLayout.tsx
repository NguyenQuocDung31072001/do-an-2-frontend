import React from 'react'
import { PathRouter } from '../constant/path.router'
import SideBarNavigation from '../pages/user/component/SideBarNavigation'
import { Outlet, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { useCustomBreadcrumb } from '../hook/useCustomBreadcrumb'
import useGenerateBreadcrumUserLayout from '../hook/user_layout/useGenerateBreadcrumUserLayout'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/footer/MainFooter'

export default function UserLayout() {
  const generateItemBreadcrumb = useGenerateBreadcrumUserLayout()

  return (
    <div className='mt-64'>
      <MainHeader />
      <Breadcrumb items={generateItemBreadcrumb} />
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
