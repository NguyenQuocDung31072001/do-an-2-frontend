import React from 'react'

//component
import InputSearch from './InputSearch'

//mocks
import { IFakeDataCategories } from '../../../mocks/categories'

interface IDetaiCategories {
  listCategoriesTitle: IFakeDataCategories[]
}
export default function DetailCategories({ listCategoriesTitle }: IDetaiCategories) {
  return (
    <div className='flex w-full items-center justify-between bg-red-100'>
      <div className='flex'>
        {listCategoriesTitle.map((categoryItem, index) => {
          return (
            <div className='flex flex-col items-center justify-start px-2 pt-4 pb-1' key={index}>
              <p className='text-[12px] font-medium'>{categoryItem.title}</p>
              <p className='text-[12px] text-gray-600'>{categoryItem.description}</p>
            </div>
          )
        })}
      </div>
      <div>
        <InputSearch />
      </div>
    </div>
  )
}
