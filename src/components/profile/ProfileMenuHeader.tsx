import React from 'react'
import ReactDOM from 'react-dom'
import CheckboxButton from '../button/CheckBoxButton'
import { CartMockData } from '../../mocks/cart/CartMockData'
import { QuantityController } from '../cart/QuantityController'
import { convertToVNPrice } from '../../utils/string'

const listMenu = [
  {
    name: 'Thông tin của tôi',
    url: ''
  },
  {
    name: 'Đơn hàng của tôi',
    url: ''
  },
  {
    name: 'Tin nhắn của tôi',
    url: ''
  },
  {
    name: 'Phiếu giảm giá của tôi',
    url: ''
  },
  {
    name: 'Điểm thưởng của tôi',
    url: ''
  },
  {
    name: 'Đã xem gần đây',
    url: ''
  },
  {
    name: 'Nhiều dịch vụ hơn',
    url: ''
  }
]
export default function ProfileMenuHeader() {
  const [nameSelected, setNameSelected] = React.useState<string>('')
  const root = document.getElementById('root') as HTMLElement

  return ReactDOM.createPortal(
    <div className='fixed right-6 top-[105px] z-50 w-[200px] bg-white shadow-xl'>
      <div className='mx-4 my-2 cursor-pointer border-b-[1px] border-gray-300 pb-2'>
        <p className='text-[12px] font-semibold text-black'>dungnguyen320701</p>
      </div>
      <div className=''>
        {listMenu.map((menu, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer px-4 py-1 `}
              onMouseEnter={() => setNameSelected(menu.name)}
              onMouseLeave={() => setNameSelected('')}
            >
              <p className={`text-[12px] ${nameSelected === menu.name ? 'text-black' : 'text-gray-500'}`}>
                {menu.name}
              </p>
            </div>
          )
        })}
      </div>
      <div
        className='mx-4 cursor-pointer border-t-[1px] border-gray-300 py-4 '
        onMouseEnter={() => setNameSelected('Đăng xuất')}
        onMouseLeave={() => setNameSelected('')}
      >
        <p className={`text-[12px] ${nameSelected === 'Đăng xuất' ? 'text-black' : 'text-gray-500'}`}>Đăng xuất</p>
      </div>
    </div>,
    root
  )
}
