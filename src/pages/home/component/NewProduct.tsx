import React from 'react'
import ProductBasic from '../../../components/product/ProductBasic'
import { IProductInfoMocks, ProductInfo } from '../../../mocks/product/productInfo'
import ChevronRightIcon from '../../../icon/ChevronRightIcon'

export default function NewProduct() {
  const [listNewProduct, setListNewProduct] = React.useState<IProductInfoMocks[]>(ProductInfo)
  return (
    <div className='my-4 flex flex-col items-center'>
      <p className='text-[24px] font-medium'>New product</p>
      <div className='my-4 grid grid-cols-6'>
        {listNewProduct.slice(0, 6).map((product, index) => {
          return <ProductBasic product={product} />
        })}
      </div>
      <div className='group mt-4 flex cursor-pointer items-center justify-center border-[1px] border-black/80 px-8 py-2'>
        <p className=' font-semibold group-hover:scale-105'>Xem tất cả </p>
        <ChevronRightIcon className='ml-2 h-4 w-4  group-hover:scale-x-125' />
      </div>
    </div>
  )
}
