import React from 'react'
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import ImageShow from './component/ImageShow'
import DetailProduct from './component/DetailProduct'
import StarIcon from '../../icon/StarIcon'
import DropdownCategory from '../../components/dropdown/DropdownCategory'

export default function ProductDetail() {
  return (
    <div className='flex flex-col items-center bg-white px-48'>
      <MainHeader />
      <div className='mt-[180px]' />
      <div className='h-[600px] w-full '>
        <div className='grid w-full grid-cols-9'>
          <div className='col-span-5 h-4 w-full'>
            <ImageShow />
          </div>
          <div className='col-span-4 ml-8 h-4 w-full'>
            <DetailProduct />
          </div>
        </div>
      </div>
      <div className='mt-[50px] w-full'>
        <p className='text-[24px] font-bold'>Khách hàng đánh giá (100 +)</p>
      </div>
      <div className='w-full bg-gray-100 '>
        <div>
          <p>Đánh giá trung bình</p>
          <div className='flex items-center'>
            <p>4.98</p>
            <div className='flex items-center'>
              <StarIcon className='h-4 w-4 text-yellow-400' />
              <StarIcon className='h-4 w-4 text-yellow-400' />
              <StarIcon className='h-4 w-4 text-yellow-400' />
              <StarIcon className='h-4 w-4 text-yellow-400' />
              <StarIcon className='h-4 w-4 text-yellow-400' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-between'>
        <p className='font-bold'>Tất cả đánh giá (100+)</p>
        <div className='flex items-center'>
          <p className='mx-4'>Xếp hạng</p>
          <DropdownCategory
            dataList={['5 ngôi sao', '4 ngôi sao', '3 ngôi sao', '2 ngôi sao', '1 ngôi sao']}
            title='Tất cả'
          />
        </div>
        <div className='flex items-center'>
          <p className='mx-4'>Sắp xếp theo</p>
          <DropdownCategory
            dataList={['Gần đây nhất đến cũ nhất', 'Cũ nhất đến gần đây nhất']}
            title='Giới thiệu'
            classNameItem='w-[200px] cursor-pointer px-4 py-1'
            classNameParent='w-[150px] cursor-pointer border-[1px] px-4 py-2 font-medium'
          />
        </div>
      </div>
      <div className='my-[100px]'></div>
      <MainFooter />
    </div>
  )
}
