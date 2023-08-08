//router
import { useRoutes } from 'react-router-dom'

//pages
import HomePages from './pages/home/HomePages'
import ProductList from './pages/productList/ProductList'
import ProductDetail from './pages/productDetail/ProductDetail'
import CartPages from './pages/cart/CartPages'
import AuthPages from './pages/auth/AuthPages'
import SecurityPages from './pages/security/SecurityPages'
import AccountSetting from './pages/account-setting/AccountSetting'

//layout
import MainLayout from './layout/MainLayout'
import UserLayout from './layout/UserLayout'

//constant
import { PathRouter } from './constant/path.router'

export default function useRoutersElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
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
          path: PathRouter.PRODUCT.PRODUCT_DETAIL,
          element: <ProductDetail />
        },
        {
          path: PathRouter.CART,
          element: <CartPages />
        },
        {
          path: PathRouter.AUTH,
          element: <AuthPages />
        }
      ]
    },
    {
      path: PathRouter.USER.INDEX,
      element: <UserLayout />,
      children: [
        { path: PathRouter.USER.SECURITY.split('/')[1], element: <SecurityPages /> },
        { path: PathRouter.USER.ACCOUNT_SETTING.split('/')[1], element: <AccountSetting /> }
      ]
    }
  ])

  return routerElement
}
