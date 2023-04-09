import React from 'react'

import { IProductStatic } from '../../mocks/product/productStatic'

interface IProductStaticComponent {
  product: IProductStatic
}
export default function ProductStatic({ product }: IProductStaticComponent) {
  console.log({ ProductStatic })

  return (
    <div className='flex flex-col'>
      <img src={product.image} alt='' />
      <p className='truncate'>{product.name}</p>
      <p>{product.price}</p>
    </div>
  )
}
