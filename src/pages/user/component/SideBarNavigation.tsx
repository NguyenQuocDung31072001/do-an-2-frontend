import React from 'react'
import MinusIcon from '../../../icon/MinusIcon'
import Submenu from './Submenu'

const Menu = [
  {
    title: 'Tài Khoản Của Tôi',
    subTitle: ['SHEIN VIP', 'Thông Tin Của Tôi', 'Sổ Địa Chỉ', 'Số Đo Của Tôi', 'Quản Lý Tài Khoản Của Tôi']
  },
  {
    title: 'Tài Sản Của Tôi',
    subTitle: ['Phiếu Giảm Giá Của Tôi', 'Điểm Thưởng Của Tôi', 'Ví Của Tôi', 'Thẻ Quà Tặng']
  },
  {
    title: 'Đơn Hàng Của Tôi',
    subTitle: [
      'Tất Cả Các Đơn Hàng',
      'Đơn Hàng Chưa Thanh Toán',
      'Đơn Hàng Đang Xử Lý',
      'Đơn Hàng Đã Vận Chuyển',
      'Đánh Giá Đơn Hàng',
      'Đơn Hàng Trả Lại'
    ]
  },
  {
    title: 'Nỗi Lo Của Tôi',
    subTitle: ['Danh Sách Mong Ước', 'Đã Xem Gần Đây']
  },
  {
    title: 'Dịch Vụ Khách Hàng',
    subTitle: ['Tin Nhắn Của Tôi', 'Lịch Sử Về Phục Vụ']
  },
  {
    title: 'Các Dịch Vụ Khác',
    subTitle: ['Trung Tâm Khảo Sát', 'Tùy Chọn Liên Hệ']
  },
  {
    title: 'Chính Sách',
    subTitle: ['Phí Vận Chuyển', 'Chính Sách Hoàn Trả', 'Chính Sách Bảo Mật & Cookie']
  },
  {
    title: 'Đăng Xuất',
    subTitle: []
  }
]
export default function SideBarNavigation() {
  const [menuList, setMenuList] = React.useState<
    {
      title: string
      subTitle: string[]
    }[]
  >(Menu)
  return (
    <div className='px-4'>
      {menuList.map((menuItem, index) => {
        return <Submenu key={index} menuItem={menuItem} />
      })}
    </div>
  )
}
