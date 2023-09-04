import React from 'react'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/footer/MainFooter'
import { Outlet } from 'react-router-dom'
import useGenerateBreadcrumMainLayout from '../hook/main_layout/useGenerateBreadcrumMainLayout'
import { Breadcrumb } from 'antd'

export default function MainLayout() {
  const generateItemBreadcrumb = useGenerateBreadcrumMainLayout()

  return (
    <div className='mt-64'>
      <MainHeader />
      <div className='mt-[180px] ' />
      <Breadcrumb items={generateItemBreadcrumb} />
      <div className='my-8' />
      <Outlet />
      <MainFooter />
    </div>
  )
}
