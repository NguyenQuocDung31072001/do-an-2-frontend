import React from 'react'
import { useCustomBreadcrumb } from '../useCustomBreadcrumb'
import { useLocation } from 'react-router-dom'
import { PathRouter } from '../../constant/path.router'

export default function useGenerateBreadcrumShopLayout() {
  const { getRouteShopProductList, getRouteShopNewProduct } = useCustomBreadcrumb()
  const { pathname } = useLocation()

  //condition
  const isProductList = pathname.endsWith(PathRouter.SHOP_PRODUCT_LIST)
  const isCreateProduct = pathname.endsWith(PathRouter.SHOP_ADD_PRODUCT)

  //generate
  if (isProductList) {
    return [
      {
        title: getRouteShopProductList({ isText: true })
      }
    ]
  } else if (isCreateProduct) {
    return [
      {
        title: getRouteShopProductList({ isText: false })
      },
      {
        title: getRouteShopNewProduct({ isText: true })
      }
    ]
  } else {
    return []
  }
}
