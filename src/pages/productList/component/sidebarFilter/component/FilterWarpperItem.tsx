import React from 'react'
import { MocksDataFilter } from '../../../../../mocks/category/dataFilter'
import PlusIcon from '../../../../../icon/PlusIcon'
import MinusIcon from '../../../../../icon/MinusIcon'
import FilterItem from './FilterItem'
import { config } from '../../../../../config'

interface IPropsFilterWrapperItem {
  nameHeaderFilter: string
}
export default function FilterWrapperItem({ nameHeaderFilter }: IPropsFilterWrapperItem) {
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <div className=''>
      <div className='flex cursor-pointer items-center justify-between' onClick={() => setOpen(!open)}>
        <p className='text-[14px] font-medium'>{nameHeaderFilter}</p>
        {MocksDataFilter[nameHeaderFilter].length > 0 && (
          <div>{open ? <MinusIcon className='h-3 w-3 ' /> : <PlusIcon className='h-3 w-3 ' />}</div>
        )}
      </div>
      {open && (
        <div>
          {MocksDataFilter[nameHeaderFilter].map((data, index) => {
            const typeInput = config.CATEGORY_HAS_RADIO.includes(nameHeaderFilter)
              ? config.TYPE_INPUT.radio
              : config.TYPE_INPUT.checkbox
            return (
              <div key={index} className='py-1'>
                <FilterItem data={data} index={index.toString()} typeInput={typeInput} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
