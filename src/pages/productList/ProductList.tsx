import React from 'react'

//component
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import Slogan from './component/Slogan'
import SortProductList from './component/SortProductList'
import SideBarFilter from './component/sidebarFilter/SideBarFilter'
import { IProductInfoMocks, ProductInfo } from '../../mocks/product/productInfo'
import ProductBasic from '../../components/product/ProductBasic'

export default function ProductList() {
  const [listProduct, setListProduct] = React.useState<IProductInfoMocks[]>(ProductInfo)

  return (
    <div className='flex flex-col items-center bg-white px-16'>
      <MainHeader />
      <div className='mt-[180px]' />
      <Slogan />
      <div className='flex w-full items-center justify-end py-4'>
        <SortProductList />
      </div>
      <div className='flex w-full'>
        <SideBarFilter />
        <div className='grid h-full w-full grid-cols-4 '>
          {listProduct.map((product, index) => {
            return (
              <div key={index} className='mb-12'>
                <ProductBasic product={product} isShowAddCart />
              </div>
            )
          })}
        </div>
      </div>
      <MainFooter />
    </div>
  )
}
