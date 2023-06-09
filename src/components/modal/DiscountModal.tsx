import React from 'react'
import ReactDom from 'react-dom'
import XIcon from '../../icon/XIcon'

const contentData = [
  {
    discount: 15,
    forOther: 600000,
    date: '09/06/2023 10:56 11~ 16/06/2023 10:56',
    conditionText: 'Đối với tất cả sản phẩm'
  },
  {
    discount: 15,
    forOther: 600000,
    date: '09/06/2023 10:56 11~ 16/06/2023 10:56',
    conditionText: 'Đối với tất cả sản phẩm'
  },
  {
    discount: 15,
    forOther: 600000,
    date: '09/06/2023 10:56 11~ 16/06/2023 10:56',
    conditionText: 'Đối với tất cả sản phẩm'
  },
  {
    discount: 15,
    forOther: 600000,
    date: '09/06/2023 10:56 11~ 16/06/2023 10:56',
    conditionText: 'Đối với tất cả sản phẩm'
  }
]
export default function DiscountModal() {
  const root = document.getElementById('root') as HTMLElement
  const [open, setOpen] = React.useState<boolean>(true)

  if (!open) return <></>

  const renderHeader = (
    <div className='mb-2 flex justify-center'>
      <p className='font-bold'>Đăng nhập để nhận phiếu giảm giá</p>
    </div>
  )
  const renderContent = (
    <div className='h-[400px] overflow-hidden overflow-y-scroll overscroll-contain'>
      <div className='mx-4'>
        {contentData.map((data, index) => {
          return (
            <div key={index} className='my-4 border-t-4 border-red-400 bg-orange-50 py-2 px-4'>
              <p className='text-[20px] font-bold text-red-400'>Giảm {data.discount}%</p>
              <p className='text-[14px] text-red-500'>Cho đơn hàng từ 600.000₫</p>
              <ul className='my-2 ml-4 list-disc text-[12px] text-gray-600'>
                <li>{data.date}</li>
                <li>{data.conditionText}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
  const renderFooter = (
    <div className='mt-4 flex justify-center'>
      <div className='flex w-full cursor-pointer justify-center bg-black px-4 py-2 font-bold text-white'>
        THU NHẬP TẤT CẢ
      </div>
    </div>
  )

  return ReactDom.createPortal(
    <div
      onScroll={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <div
        className='fixed top-0 z-40 flex h-[100vh] w-[100vw] items-center justify-center bg-black/40'
        onClick={() => setOpen(!open)}
      ></div>
      <div className='fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-b from-pink-300 to-pink-400 p-4'>
        <div className='flex justify-end'>
          <XIcon className='h-4 w-4 cursor-pointer' onClick={() => setOpen(!open)} />
        </div>
        {renderHeader}
        {renderContent}
        {renderFooter}
      </div>
    </div>,
    root
  )
}
