import React from 'react'
import { IFakeDataCategories } from '../../../mocks/category/categories'

interface IPropsDetailCategoryInfo {
  categoryItem: IFakeDataCategories
  categoryInfoSelected: IFakeDataCategories
}
export default function DetailCategoryInfo({ categoryItem, categoryInfoSelected }: IPropsDetailCategoryInfo) {
  const [openInfo, setOpenInfo] = React.useState(false)
  // const ref = React.useRef<HTMLDivElement>(null)
  const width = window.innerWidth

  return (
    <div
      className='flex min-h-[80px] flex-col items-center justify-start px-2 pt-4 pb-1'
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
        <div
          className={`flex h-[400px] items-center justify-center border-t-[1px] border-gray-300 bg-white`}
          style={{ width: width, position: 'fixed', left: 0, top: 180 }}
        >
          {categoryItem.title}
        </div>
      )}
    </div>
  )
}
