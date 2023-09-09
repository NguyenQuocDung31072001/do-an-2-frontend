//libs
import { useRoutes } from 'react-router-dom'

//pages
//user
import HomePages from './pages/home/HomePages'
import ProductList from './pages/productList/ProductList'
import ProductDetail from './pages/productDetail/ProductDetail'
import CartPages from './pages/cart/CartPages'
import AuthPages from './pages/auth/AuthPages'
import SecurityPages from './pages/security/SecurityPages'
import AccountSetting from './pages/account-setting/AccountSetting'

//shop
import MyShopPages from './pages/my_shop/MyShopPages'
import ShopAddProduct from './pages/shop_add_product/ShopAddProduct'
import RegisterNewShop from './pages/register_new_shop/RegisterNewShop'

//layout
import MainLayout from './layout/MainLayout'
import UserLayout from './layout/UserLayout'
import ShopLayout from './layout/ShopLayout'

//constant
import { PathRouter } from './constant/path.router'
import ShopProductList from './pages/shop_product_list/ShopProductList'

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
    },
    {
      path: PathRouter.SHOP_ORIGIN,
      element: <ShopLayout />,
      children: [
        { path: PathRouter.MY_SHOP, element: <MyShopPages /> },
        { path: PathRouter.SHOP_ADD_PRODUCT, element: <ShopAddProduct /> },
        { path: PathRouter.SHOP_PRODUCT_LIST, element: <ShopProductList /> }
      ]
    },
    {
      path: PathRouter.SHOP_ORIGIN,
      children: [{ path: PathRouter.REGISTER_NEW_SHOP, element: <RegisterNewShop /> }]
    }
  ])

  return routerElement
}
