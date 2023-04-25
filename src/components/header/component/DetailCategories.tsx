import React from 'react'

//component
import InputSearch from './InputSearch'

//mocks
import { IFakeDataCategories } from '../../../mocks/category/categories'
import { useMainHeaderContext } from '../../../context/MainHeaderContext'
import DetailCategoryInfo from './DetailCategoryInfo'

interface IDetaiCategories {
  listCategoriesTitle: IFakeDataCategories[]
}
export default function DetailCategories({ listCategoriesTitle }: IDetaiCategories) {
  const [categoryInfoSelected, setCategoryInfoSelected] = React.useState<IFakeDataCategories>({} as IFakeDataCategories)

  return (
    <div className='flex min-h-[60px] w-full items-center justify-between bg-white'>
      <div className='flex'>
        {listCategoriesTitle.map((categoryItem, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setCategoryInfoSelected(categoryItem)}
              className='relative w-full cursor-pointer'
            >
              <div
                className={`${
                  categoryInfoSelected.title === categoryItem.title
                    ? 'absolute bottom-[6px] h-[2px] w-full bg-black'
                    : ''
                }`}
              ></div>
              <DetailCategoryInfo categoryItem={categoryItem} categoryInfoSelected={categoryInfoSelected} />
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
