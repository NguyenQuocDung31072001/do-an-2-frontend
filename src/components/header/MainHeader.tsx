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
import { categories, IFakeDataCategories } from '../../mocks/categories'
import DetailCategoryInfo from './component/DetailCategoryInfo'
import { MainHeaderContextProvider } from '../../context/MainHeaderContext'

export default function MainHeader() {
  //useState
  const [positionHeader, setPositionHeader] = React.useState('0px')
  const [listCategoriesTitleSelected, setListCategoriesTitleSelected] = React.useState<IFakeDataCategories[]>([])
  const [indexSelected, setIndexSelected] = React.useState<number>()
  //hook

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
        className='fixed top-0 z-50 flex w-full flex-col items-center justify-center'
      >
        <div>
          <img src={free_ship_image} className='h-[50px] object-cover' />
        </div>
        <div className='grid w-full grid-cols-12  bg-gray-100'>
          <div className='col-span-5 flex items-center justify-start'>
            {Object.keys(categories).map((categoryTitle, index) => (
              <p
                className={`cursor-pointer ${
                  index === indexSelected ? 'bg-white' : 'hover:bg-gray-200'
                } px-2 py-4 font-medium text-gray-600 `}
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
          <div className='col-span-2 flex items-center justify-center font-semibold text-gray-800'>Đồ án 2</div>
          <div className='col-span-2 flex items-center justify-start'>
            <ShippingInfo />
          </div>
          <div className='col-span-3 flex items-center justify-start'>
            <InfoUser />
          </div>
        </div>
        <DetailCategories listCategoriesTitle={listCategoriesTitleSelected} />
      </motion.div>
    </MainHeaderContextProvider>
  )
}
