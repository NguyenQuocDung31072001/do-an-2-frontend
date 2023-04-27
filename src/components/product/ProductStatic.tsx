import React from 'react'

import { IProductStatic } from '../../mocks/product/productStatic'
import { useNavigate } from 'react-router-dom'
import { PathRouter } from '../../constant/path.router'

interface IProductStaticComponent {
  product: IProductStatic
}
export default function ProductStatic({ product }: IProductStaticComponent) {
  const navigate = useNavigate()
  return (
    <div className='flex cursor-pointer flex-col' onClick={() => navigate(PathRouter.PRODUCT.PEODUCT_DETAIL)}>
      <img src={product.image} alt='' />
      <p className='truncate'>{product.name}</p>
      <p>{product.price}</p>
    </div>
  )
}
