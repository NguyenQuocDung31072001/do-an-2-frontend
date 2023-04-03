import React from 'react'
import { IProductInfoMocks } from '../../mocks/product/productInfo'
import { motion } from 'framer-motion'
import HeartIcon from '../../icon/HeartIcon'
import HeartFillIcon from '../../icon/HeartFillIcon'

interface IProps {
  product: IProductInfoMocks
}
export default function ProductBasic({ product }: IProps) {
  const [imageUrl, setImageUrl] = React.useState<string>(product.imageProduct[0])
  const [dataProduct, setDataProduct] = React.useState<IProductInfoMocks>(product)

  const price = dataProduct.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })

  const handleMouseEnter = () => {
    setImageUrl(dataProduct.imageProduct[1])
  }
  const handleMouseLeave = () => {
    setImageUrl(dataProduct.imageProduct[0])
  }
  return (
    <div className='relative mx-2'>
      <motion.img
        key={imageUrl}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={imageUrl}
        className='cursor-pointer'
        alt=''
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <p className='absolute right-2 top-2 text-black/80'>New</p>
      <p className='mt-2 text-[12px] font-normal text-gray-500'>{dataProduct.productName}</p>
      <div className='flex items-center justify-between'>
        <p className='text-[12px] font-bold'>{price}</p>
        {dataProduct.isFavorite ? (
          <HeartFillIcon
            className='h-4 w-4 cursor-pointer text-red-500 hover:scale-125'
            onClick={() => setDataProduct({ ...dataProduct, isFavorite: false })}
          />
        ) : (
          <HeartIcon
            className='h-4 w-4 cursor-pointer hover:scale-125'
            onClick={() => setDataProduct({ ...dataProduct, isFavorite: true })}
          />
        )}
      </div>
    </div>
  )
}
