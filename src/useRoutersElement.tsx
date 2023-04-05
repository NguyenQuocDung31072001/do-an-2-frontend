import React from 'react'

//router
import { useRoutes } from 'react-router-dom'

//pages
import HomePages from './pages/home/HomePages'
import ProductList from './pages/productList/ProductList'

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
    }
    // { path: "team", element: <AboutPage /> },
  ])

  return routerElement
}
