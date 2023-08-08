import { Link } from 'react-router-dom'
import { PathRouter } from '../constant/path.router'

export function useCustomBreadcrumb() {
  return {
    getRouteHome: ({ isText }: { isText?: boolean }) => {
      if (isText) return 'Trang chủ'
      return <Link to={PathRouter.HOME}>Trang chủ</Link>
    },
    //product
    getRouteProductList: ({ isText }: { isText?: boolean }) => {
      if (isText) return 'Danh sách sản phẩm'
      return <Link to={PathRouter.PRODUCT.PRODUCT_LIST}>Danh sách sản phẩm</Link>
    },
    getRouteProductDetail: (product_name: string) => {
      return product_name
    },
    //cart
    getRouteCart: ({ isText }: { isText?: boolean }) => {
      if (isText) return 'Giỏ hàng'
      return <Link to={PathRouter.CART}>Giỏ hàng</Link>
    },
    //account
    getRouteAccountCenter: ({ isText }: { isText?: boolean }) => {
      if (isText) {
        return 'Trung tâm cá nhân'
      }
      return <Link to={PathRouter.USER.INDEX}>Trung tâm cá nhân</Link>
    },
    getRouteAccountInfo: () => {
      return 'Thông tin của tôi'
    },
    getRouteAccountSecurity: () => {
      return 'Quản lý tài khoản của tôi'
    }
  }
}
