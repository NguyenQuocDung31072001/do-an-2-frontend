import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React from 'react'
import ProductFlashSale from '../../../components/product/ProductFlashSale'
import { ProductSaleMockData } from '../../../mocks/product/productSale'
import Slider from 'react-slick'
import ChevronRightIcon from '../../../icon/chevron/ChevronRightIcon'
import ChevronLeftIcon from '../../../icon/chevron/ChevronLeftIcon'

// function NextArrow(props: any) {
//   const { className, style, onClick } = props

//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block'
//       }}
//       onClick={onClick}
//     >
//       <img src='https://www.svgrepo.com/show/154448/next-arrow.svg' alt='' />
//     </div>
//   )
// }
// function PrevArrow(props: any) {
//   const { className, style, onClick } = props
//   return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />
// }

export default function FlashSale() {
  const sliderRef = React.useRef<Slider>(null)
  const [listProductFlashSale, setListProductFlashSale] = React.useState(ProductSaleMockData)

  return (
    <div className='w-full'>
      <div className='my-4 flex w-full items-center justify-between'>
        <p className='text-[24px] font-medium'>FLASH SALE</p>
      </div>
      <div className='relative'>
        <Slider
          ref={sliderRef}
          arrows={false}
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={6}
          slidesToScroll={6}
        >
          {listProductFlashSale.map((productFlashSale, index) => {
            return <ProductFlashSale key={index} productFlashSale={productFlashSale} />
          })}
        </Slider>
        <div
          className='absolute left-[10px] top-[50%] translate-y-[-50%]  cursor-pointer rounded-[50%] bg-gray-200  p-2 hover:bg-gray-500 '
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <ChevronLeftIcon className='h-4 w-4' />
        </div>
        <div
          className='absolute right-[10px] top-[50%] translate-y-[-50%]  cursor-pointer rounded-[50%] bg-gray-200  p-2 hover:bg-gray-500'
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <ChevronRightIcon className='h-4 w-4' />
        </div>
      </div>
    </div>
  )
}
