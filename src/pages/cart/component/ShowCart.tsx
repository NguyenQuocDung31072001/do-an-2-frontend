import React from 'react'
import CheckboxButton from '../../../components/button/CheckBoxButton'
import { CartMockData } from '../../../mocks/cart/CartMockData'
import { QuantityController } from '../../../components/cart/QuantityController'
import { convertToVNPrice } from '../../../utils/string'
import { useNavigate } from 'react-router-dom'
import { PathRouter } from '../../../constant/path.router'

export default function ShowCart() {
  const navigate = useNavigate()
  const productIsStock = CartMockData.filter((data) => data.quantity > 0)
  const productIsOutOfStock = CartMockData.filter((data) => data.quantity === 0)

  return (
    <div className='grid w-full grid-cols-3'>
      <div className='col-span-2 mr-4'>
        <div className='mb-2 w-full bg-white p-4'>
          <p className='pb-4 text-[18px] font-bold'>Tóm tắt mặt hàng (0)</p>
          <div className='grid w-full grid-cols-5'>
            <div className='col-span-1 flex items-center'>
              <CheckboxButton id='cart-check-total' title='' />
              <p className='text-[14px] font-bold'>Tất cả</p>
            </div>
            <div className='col-span-1'>
              <p className='text-[14px] font-bold'>Sản phẩm</p>
            </div>
            <div className='col-span-1'>
              <p className='text-[14px] font-bold'>Giá</p>
            </div>
            <div className='col-span-1'>
              <p className='text-[14px] font-bold'>Số lượng</p>
            </div>
            <div className='col-span-1'>
              <p className='text-[14px] font-bold'>Tổng cộng</p>
            </div>
          </div>
        </div>
        <div className='mb-4 flex items-center bg-white p-4'>
          <CheckboxButton id='cart-item-check-all' title='' />
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-4 w-4 font-bold'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
              />
            </svg>
            <p className='text-[14px] font-bold'>Đồ án 2</p>
          </div>
        </div>
        {productIsStock.map((cartData, index) => {
          return (
            <div key={index} className='relative flex bg-white p-4'>
              <CheckboxButton id='large-cart-item-shop' title='' />
              <div className='relative'>
                <img src={cartData.image} alt='' className='w-[116px] object-cover' />
                <div className='absolute bottom-0 flex w-full items-center justify-center bg-orange-400 py-[1px] text-[12px] text-white'>
                  Chỉ có {cartData.quantity} cái
                </div>
              </div>
              <div className='ml-2 w-full'>
                <p
                  className='w-auto cursor-pointer text-[14px] hover:font-bold'
                  onClick={() => navigate(PathRouter.PRODUCT.PEODUCT_DETAIL)}
                >
                  {cartData.productName}
                </p>
                <div className='mt-4 grid grid-cols-3'>
                  <div className='col-span-1'></div>
                  <div className='col-span-2 flex w-full items-center justify-between'>
                    <p className='font-bold'>{convertToVNPrice(cartData.price)}</p>
                    <QuantityController />
                    <p className='font-bold'>{convertToVNPrice(cartData.price)}</p>
                  </div>
                </div>
                <div className='absolute bottom-5 cursor-pointer'>
                  <p className='text-[12px] hover:font-bold'>Xóa</p>
                </div>
              </div>
            </div>
          )
        })}
        <div className='my-4 h-1 w-full' />
        <div className='w-full bg-gray-100'>
          <div className='my-2 h-1 w-full' />
          <div className='m-4'>
            <p className='font-bold'>Bán hết</p>
          </div>
          {productIsOutOfStock.map((cartData, index) => {
            return (
              <div key={index} className='relative flex bg-white p-4'>
                <CheckboxButton id='large-cart-item-shop' title='' disable />
                <div className='relative'>
                  <img src={cartData.image} alt='' className='w-[116px] object-cover' />
                  <div className='absolute bottom-0 flex w-full items-center justify-center bg-gray-600 py-[1px] text-[12px] text-white'>
                    Bán hết
                  </div>
                </div>
                <div className='ml-2 w-full'>
                  <p className='w-auto text-[14px] text-gray-500'>{cartData.productName}</p>
                  <div className='mt-4 grid grid-cols-3'>
                    <div className='col-span-1'></div>
                    <div className='col-span-2 flex w-full items-center justify-between'>
                      <p className='font-bold text-black/20'>{convertToVNPrice(cartData.price)}</p>
                      <QuantityController disable />
                      <p className='font-bold text-black/20'>{convertToVNPrice(cartData.price)}</p>
                    </div>
                  </div>
                  <div className='absolute bottom-5 cursor-pointer'>
                    <p className='text-[12px] hover:font-bold'>Xóa</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='col-span-1 w-full '>
        <div className='w-full bg-white p-8'>
          <p className='text-[20px] font-bold'>Tóm tắt đơn hàng</p>
          <div className='mb-4 flex items-center justify-between'>
            <p className='text-[12px] text-black'>Tạm tính</p>
            <p className='text-[18px] font-bold'>{convertToVNPrice(12)}</p>
          </div>
          <div className='flex w-full cursor-pointer items-center justify-center bg-black px-4 py-2 text-[20px] font-bold text-white hover:bg-black/70'>
            Thanh toán ngay
          </div>
          <div className='mt-4 w-full text-[14px] text-gray-500'>
            Dụng Mã giảm giá, Điểm SHEIN trong bước tiếp theo.
          </div>
        </div>
      </div>
    </div>
  )
}
