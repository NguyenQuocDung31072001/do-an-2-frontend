import React from 'react'
import { useMainHeaderContext } from '../../../context/MainHeaderContext'
import { IFakeDataCategories } from '../../../mocks/categories'

interface IPropsDetailCategoryInfo {
  categoryItem: IFakeDataCategories
  categoryInfoSelected: IFakeDataCategories
}
export default function DetailCategoryInfo({ categoryItem, categoryInfoSelected }: IPropsDetailCategoryInfo) {
  const [openInfo, setOpenInfo] = React.useState(false)

  return (
    <div
      className='relative flex flex-col items-center justify-start px-2 pt-4 pb-1'
      onMouseEnter={() => {
        setOpenInfo(true)
      }}
      onMouseLeave={() => {
        setOpenInfo(false)
      }}
    >
      <p className='text-[12px] font-medium'>{categoryItem.title}</p>
      <p className='text-[12px] text-gray-600'>{categoryItem.description}</p>
      {openInfo && categoryInfoSelected.title === categoryItem.title && (
        <div className='absolute top-[55px] flex h-[400px] w-[1000px] items-center justify-center border-t-[1px] border-gray-300 bg-white'>
          {categoryItem.title}
        </div>
      )}
    </div>
  )
}
