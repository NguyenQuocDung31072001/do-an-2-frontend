import React from 'react'
import useGenerateBreadcrumMainLayout from '../hook/main_layout/useGenerateBreadcrumMainLayout'
import { Breadcrumb } from 'antd'
import { Outlet } from 'react-router-dom'
import MyShopHeader from '../components/header/MyShopHeader'
import MenuMyShop from './component/MenuMyShop'

export default function ShopLayout() {
  const generateItemBreadcrumb = useGenerateBreadcrumMainLayout()

  return (
    <div className='h-full bg-gray-100 py-16'>
      <MyShopHeader />
      {/* <div className='mt-[180px] ' /> */}
      {/* <Breadcrumb items={generateItemBreadcrumb} /> */}
      <div className='mx-4 grid grid-cols-8'>
        <div className='col-span-2 flex justify-center rounded-lg bg-white px-4 shadow-lg'>
          <MenuMyShop />
        </div>
        <div className='col-span-6 mx-2 rounded-lg bg-white px-4 shadow-lg'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
