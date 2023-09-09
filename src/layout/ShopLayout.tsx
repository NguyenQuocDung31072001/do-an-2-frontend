import React from 'react'
import useGenerateBreadcrumMainLayout from '../hook/main_layout/useGenerateBreadcrumMainLayout'
import { Breadcrumb } from 'antd'
import { Outlet } from 'react-router-dom'
import MyShopHeader from '../components/header/MyShopHeader'
import MenuMyShop from './component/MenuMyShop'
import useGenerateBreadcrumShopLayout from '../hook/shop_layout/useGenerateBreadcrumShopLayout'

export default function ShopLayout() {
  const generateItemBreadcrumb = useGenerateBreadcrumShopLayout()

  return (
    <div className='h-full bg-gray-100 pt-20'>
      <MyShopHeader />
      <div className='mx-4 grid grid-cols-8'>
        <div className='col-span-2 flex h-[600px] justify-center  overflow-y-scroll rounded-lg bg-white px-4 shadow-lg '>
          <div className='h-10 w-full' />
          <MenuMyShop />
        </div>
        <div className='col-span-6 mx-2 h-[600px] overflow-y-scroll rounded-lg bg-white shadow-lg'>
          <div className='m-8'>
            <Breadcrumb items={generateItemBreadcrumb} />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  )
}
