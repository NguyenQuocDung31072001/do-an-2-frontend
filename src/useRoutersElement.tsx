import React from 'react'

//router
import { useRoutes } from 'react-router-dom'

//pages
import HomePages from './pages/home/HomePages'
import ProductList from './pages/productList/ProductList'
import ProductDetail from './pages/productDetail/ProductDetail'
import CartPages from './pages/cart/CartPages'

//components

export default function useRoutersElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <HomePages />
    },
    {
      path: '/product-list',
      element: <ProductList />
    },
    {
      path: '/product-detail',
      element: <ProductDetail />
    },
    {
      path: '/cart',
      element: <CartPages />
    }
  ])

  return routerElement
}
