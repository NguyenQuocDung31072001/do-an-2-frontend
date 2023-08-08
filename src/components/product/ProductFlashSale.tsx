import React from 'react'
import { IMockProductSaleData } from '../../mocks/product/productSale'
import BoltIcon from '../../icon/BoltIcon'
import { useNavigate } from 'react-router-dom'
import { convertToVNPrice } from '../../utils/string'
import { PathRouter } from '../../constant/path.router'

interface IProps {
  productFlashSale: IMockProductSaleData
}
export default function ProductFlashSale({ productFlashSale }: IProps) {
  const navigate = useNavigate()
  const price = convertToVNPrice(productFlashSale.price)
  const currentPrice = convertToVNPrice((productFlashSale.price * (100 - productFlashSale.percentSaleOff)) / 100)
  const percentCurrentQuantityOfTotal = (productFlashSale.currentQuantity / productFlashSale.totalQuantity) * 100

  return (
    <div className='px-2 ' onClick={() => navigate(PathRouter.PRODUCT.PRODUCT_DETAIL)}>
      <div className='relative cursor-pointer'>
        <img src={productFlashSale.imageProduct[0] || ''} alt='' />
        <div className='absolute right-0 top-0'>
          <img src={productFlashSale.imageFlashSale} alt='' />
        </div>
        <div className='absolute top-0 left-0 flex flex-col items-center bg-yellow-400 px-2 py-2'>
          <BoltIcon className='h-5 w-5' />
          <span className='text-[14px] font-bold'>-{productFlashSale.percentSaleOff}%</span>
        </div>
      </div>
      <div className='my-1 flex flex-wrap justify-start'>
        <p className='text-[14px] font-bold text-orange-600'>{currentPrice}</p>
        <p className='ml-2 text-[12px] text-gray-400 line-through'>{price}</p>
      </div>
      <div className='h-2 w-full rounded-full bg-gray-200'>
        <div className='h-2 rounded-full bg-yellow-400' style={{ width: percentCurrentQuantityOfTotal }}></div>
      </div>
      <span className='text-[12px] font-medium text-gray-700'>{percentCurrentQuantityOfTotal}% Đã bán</span>
    </div>
  )
}
