import React from 'react'

//component
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import Slogan from './component/Slogan'
import SortProductList from './component/SortProductList'
import SideBarFilter from './component/sidebarFilter/SideBarFilter'
import { IProductInfoMocks, ProductInfo } from '../../mocks/product/productInfo'
import ProductBasic from '../../components/product/ProductBasic'
import Slider from 'react-slick'
import { productStatic } from '../../mocks/product/productStatic'
import ProductStatic from '../../components/product/ProductStatic'
import ChevronLeftIcon from '../../icon/chevron/ChevronLeftIcon'
import ChevronRightIcon from '../../icon/chevron/ChevronRightIcon'

export default function ProductList() {
  const sliderRef = React.useRef<Slider>(null)

  const [listProduct, setListProduct] = React.useState<IProductInfoMocks[]>(ProductInfo)

  //useEffect
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='mb-8 flex w-full flex-col items-center px-16'>
      <Slogan />
      <div className='flex w-full items-center justify-end py-4'>
        <SortProductList />
      </div>
      <div className='grid grid-cols-4'>
        <div className='col-span-1'>
          <SideBarFilter />
        </div>
        <div className='col-span-3 flex w-full flex-col'>
          <div className='grid h-full w-full grid-cols-4 '>
            {listProduct.map((product, index) => {
              return (
                <div key={index} className='mb-12'>
                  <ProductBasic product={product} isShowAddCart />
                </div>
              )
            })}
          </div>
          <div>
            <p className='text-[18px] font-semibold'>Những Lời Khuyên Dành Cho Bạn</p>
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
                {productStatic.map((product, index) => {
                  return <ProductStatic key={index} product={product} />
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
        </div>
      </div>
    </div>
  )
}
