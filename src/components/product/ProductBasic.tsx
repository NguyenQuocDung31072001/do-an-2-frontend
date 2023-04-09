import React from 'react'
import { IProductInfoMocks } from '../../mocks/product/productInfo'
import { motion } from 'framer-motion'
import HeartIcon from '../../icon/HeartIcon'
import HeartFillIcon from '../../icon/HeartFillIcon'
import { AnimatePresence } from 'framer-motion'

interface IProps {
  product: IProductInfoMocks
  isShowAddCart?: boolean
}
export default function ProductBasic({ product, isShowAddCart = false }: IProps) {
  const [imageUrl, setImageUrl] = React.useState<string>(product.imageProduct[0])
  const [delayHandler, setDelayHandler] = React.useState<any>()

  const [dataProduct, setDataProduct] = React.useState<IProductInfoMocks>(product)

  const price = dataProduct.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })

  const handleMouseEnter = () => {
    setImageUrl(dataProduct.imageProduct[1])
    // setDelayHandler(
    //   setTimeout(() => {
    //   }, 100)
    // )
  }
  const handleMouseLeave = () => {
    setImageUrl(dataProduct.imageProduct[0])
    // clearTimeout(delayHandler)
  }

  return (
    <div className='relative mx-2'>
      <AnimatePresence mode='wait'>
        <div className='group relative'>
          <motion.img
            key={imageUrl}
            // initial={{ opacity: 0.6 }}
            // animate={{
            //   opacity: 1
            // }}
            // exit={{ opacity: 0.6 }}
            // transition={{ duration: 0.2 }}
            src={imageUrl}
            className='cursor-pointer '
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {isShowAddCart && (
            <div className='absolute bottom-10 left-[50%] flex h-[20px] w-[180px] translate-x-[-50%] cursor-pointer items-center justify-center overflow-hidden bg-white p-6 font-semibold text-black opacity-0 duration-300 hover:scale-110 group-hover:opacity-100'>
              <p className='truncate'>Thêm Vào Giỏ Hàng</p>
            </div>
          )}
        </div>
      </AnimatePresence>
      <p className='absolute right-2 top-2 text-black/80'>New</p>
      <p className='mt-2 text-[12px] font-normal text-gray-500'>{dataProduct.productName}</p>
      <div className='flex items-center justify-between'>
        <p className='text-[12px] font-bold'>{price}</p>
        {dataProduct.isFavorite ? (
          <HeartFillIcon
            className='h-4 w-4 cursor-pointer text-red-500 duration-300 hover:scale-125'
            onClick={() => setDataProduct({ ...dataProduct, isFavorite: false })}
          />
        ) : (
          <HeartIcon
            className='h-4 w-4 cursor-pointer duration-300 hover:scale-125'
            onClick={() => setDataProduct({ ...dataProduct, isFavorite: true })}
          />
        )}
      </div>
    </div>
  )
}
