import React from 'react'
//assets
import free_ship_image from '../../assets/free_ship.png'

//component
import ShippingInfo from './component/ShippingInfo'
import InfoUser from './component/InfoUser'
import DetailCategories from './component/DetailCategories'

//framer-motion
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

//hook
import useCheckScrollDirection, { EnumDirection } from '../../hook/useCheckScrollDirection'

//mocks
import { categories, IFakeDataCategories } from '../../mocks/category/categories'
import { MainHeaderContextProvider } from '../../context/MainHeaderContext'
import { useNavigate } from 'react-router-dom'
import { PathRouter } from '../../constant/path.router'

export default function MainHeader() {
  //useState
  const [positionHeader, setPositionHeader] = React.useState('0px')
  const [listCategoriesTitleSelected, setListCategoriesTitleSelected] = React.useState<IFakeDataCategories[]>([])
  const [indexSelected, setIndexSelected] = React.useState<number>()
  //hook
  const navigate = useNavigate()

  const { scrollY } = useScroll()
  const { direction } = useCheckScrollDirection()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 500) {
      if (direction === EnumDirection.UP) {
        setPositionHeader('0px')
      } else {
        setPositionHeader('-200px')
      }
    } else {
      setPositionHeader('0px')
    }
  })

  const handleGetListCategoriesTitle = (title: string) => {
    setListCategoriesTitleSelected(categories[title])
  }

  return (
    <MainHeaderContextProvider>
      <motion.div
        animate={{ translateY: positionHeader }}
        transition={{ duration: 0.2 }}
        className='fixed top-0 z-40 flex w-full flex-col items-center justify-center'
      >
        <div>
          <img
            src={'https://img.ltwebstatic.com/images3_ccc/2023/04/20/16819701378d55cbec6d8e1fddccd78f8f287faf5c.gif'}
            className='h-[50px] object-cover'
          />
        </div>
        <div className='grid w-full grid-cols-12  bg-gray-100'>
          <div className='col-span-5 flex items-center justify-start'>
            {Object.keys(categories).map((categoryTitle, index) => (
              <p
                className={`cursor-pointer ${
                  index === indexSelected ? 'bg-white text-black' : 'text-gray-600 hover:bg-gray-200 '
                } px-2 py-4 font-medium`}
                key={categoryTitle}
                onClick={() => {
                  handleGetListCategoriesTitle(categoryTitle)
                  setIndexSelected(index)
                }}
              >
                {categoryTitle}
              </p>
            ))}
          </div>
          <div
            className='col-span-2 flex cursor-pointer items-center justify-center text-[24px] font-bold text-gray-800'
            onClick={() => {
              navigate(PathRouter.HOME)
            }}
          >
            Đồ án 2
          </div>
          <div className='col-span-2 flex items-center justify-start'>
            <ShippingInfo />
          </div>
          <div className='col-span-3 flex items-center justify-end'>
            <InfoUser />
          </div>
        </div>
        <DetailCategories listCategoriesTitle={listCategoriesTitleSelected} />
      </motion.div>
    </MainHeaderContextProvider>
  )
}
