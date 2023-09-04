import React from 'react'
import { ProfileOutlined, CarOutlined, HomeOutlined, BarChartOutlined, BankOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PathRouter } from '../../constant/path.router'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem(
    'Shop',
    'shop',
    null,
    [
      getItem('Hồ sơ shop', PathRouter.MY_SHOP.split('/')[2], <ProfileOutlined />),
      getItem('Cài đặt vận chuyển shop', '2', <CarOutlined />),
      getItem('Địa chỉ shop', '3', <HomeOutlined />),
      getItem('Đánh giá shop', '4', <BarChartOutlined />),
      getItem('Tài khoản / Thẻ ngân hàng', '5', <BankOutlined />)
    ],
    'group'
  ),
  getItem(
    'Cài đặt',
    'setting',
    null,
    [
      getItem('Thiết lập shop', '6', <BankOutlined />),
      getItem('Cài đặt chat', '7', <BankOutlined />),
      getItem('Cài đặt thông báo', '8', <BankOutlined />)
    ],
    'group'
  ),
  getItem(
    'Tài khoản',
    'account',
    null,
    [getItem('Tài khoản', '9', <BankOutlined />), getItem('Thay đổi mật khẩu', '10', <BankOutlined />)],
    'group'
  ),
  getItem(
    'Sản phẩm',
    'product',
    null,
    [getItem('Thêm mới sản phẩm', PathRouter.SHOP_ADD_PRODUCT.split('/')[2], <BankOutlined />)],
    'group'
  )
]

const MenuMyShop: React.FC = () => {
  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e.key)
    navigate(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      items={items}
    />
  )
}

export default MenuMyShop
