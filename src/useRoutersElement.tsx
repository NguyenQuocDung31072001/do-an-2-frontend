import React from 'react'

//router
import { useRoutes, Outlet } from 'react-router-dom'

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
import MainHeader from './components/header/MainHeader'
import MainFooter from './components/footer/MainFooter'

//components
function WrapperPageContainer() {
  return (
    <>
      <MainHeader />
      <div className='mt-[180px]' w-full />
      <Outlet />
      <MainFooter />
    </>
  )
}

export default function useRoutersElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <WrapperPageContainer />,
      children: [
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
      ]
    }
  ])

  return routerElement
}
