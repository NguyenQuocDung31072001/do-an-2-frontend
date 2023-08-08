import React from 'react'
import { useCustomBreadcrumb } from '../useCustomBreadcrumb'
import { useLocation } from 'react-router-dom'
import { PathRouter } from '../../constant/path.router'

export default function useGenerateBreadcrumMainLayout() {
  const { getRouteHome, getRouteProductList, getRouteProductDetail, getRouteCart } = useCustomBreadcrumb()
  const { pathname } = useLocation()

  //condition
  const isHome = pathname.endsWith(PathRouter.HOME)
  const isProductList = pathname.endsWith(PathRouter.PRODUCT.PRODUCT_LIST)
  const isProductDetail = pathname.endsWith(PathRouter.PRODUCT.PRODUCT_DETAIL)
  const isCart = pathname.endsWith(PathRouter.CART)

  //generate
  if (isHome) {
    return [
      {
        title: getRouteHome({ isText: true })
      }
    ]
  } else if (isProductList) {
    return [
      { title: getRouteHome({}) },
      {
        title: getRouteProductList({ isText: true })
      }
    ]
  } else if (isProductDetail) {
    return [
      { title: getRouteHome({}) },
      { title: getRouteProductList({}) },
      { title: getRouteProductDetail('product name example') }
    ]
  } else if (isCart) {
    return [
      { title: getRouteHome({}) },
      {
        title: getRouteCart({ isText: true })
      }
    ]
  } else {
    return []
  }
}
