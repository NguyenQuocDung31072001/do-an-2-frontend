import React from 'react'

//component
import SaleOffAnnouncement from './component/SaleOffAnnouncement'
import FlashSale from './component/FlashSale'
import NewProduct from './component/NewProduct'
import { useNavigate } from 'react-router-dom'
import ChevronRightIcon from '../../icon/chevron/ChevronRightIcon'
import { PathRouter } from '../../constant/path.router'
import DiscountModal from '../../components/modal/DiscountModal'

export default function HomePages() {
  const navigate = useNavigate()

  //useEffect
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='mb-8 flex w-full flex-col items-center px-16'>
      <DiscountModal />
      <SaleOffAnnouncement />
      <FlashSale />
      <NewProduct />
      <div
        className='group mt-4 flex cursor-pointer items-center justify-center border-[1px] border-black/80 px-8 py-2'
        onClick={() => navigate(PathRouter.PRODUCT.PRODUCT_LIST)}
      >
        <p className=' font-semibold group-hover:scale-105'>Xem tất cả </p>
        <ChevronRightIcon className='ml-2 h-4 w-4  group-hover:scale-x-125' />
      </div>
    </div>
  )
}
