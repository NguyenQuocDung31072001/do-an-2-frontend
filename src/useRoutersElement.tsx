import React from 'react'

//router
import { useRoutes } from 'react-router-dom'

//pages
import HomePages from './pages/home/HomePages'
import ProductList from './pages/productList/ProductList'
import ProductDetail from './pages/productDetail/ProductDetail'
import CartPages from './pages/cart/CartPages'
import AuthPages from './pages/auth/AuthPages'
import UserPages from './pages/user/UserPages'
import SecurityPages from './pages/security/SecurityPages'
import { PathRouter } from './constant/path.router'
import AccountSetting from './pages/account-setting/AccountSetting'

//components

export default function useRoutersElement() {
  const routerElement = useRoutes([
    {
      path: PathRouter.HOME,
      element: <HomePages />
    },
    {
      path: PathRouter.PRODUCT.PRODUCT_LIST,
      element: <ProductList />
    },
    {
      path: PathRouter.PRODUCT.PEODUCT_DETAIL,
      element: <ProductDetail />
    },
    {
      path: PathRouter.CART,
      element: <CartPages />
    },
    {
      path: PathRouter.AUTH,
      element: <AuthPages />
    },
    {
      path: PathRouter.USER.INDEX,
      element: <UserPages />,
      children: [
        { path: PathRouter.USER.SECURITY.split('/')[1], element: <SecurityPages /> },
        { path: PathRouter.USER.ACCOUNT_SETTING.split('/')[1], element: <AccountSetting /> }
      ]
    }
  ])

  return routerElement
}
