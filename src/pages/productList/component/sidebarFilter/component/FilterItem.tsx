import React from 'react'
import { IMocksDataFilter } from '../../../../../mocks/category/dataFilter'
import PlusIcon from '../../../../../icon/PlusIcon'
import MinusIcon from '../../../../../icon/MinusIcon'
import RadioButton from '../../../../../components/button/RadioButton'
import CheckboxButton from '../../../../../components/button/CheckBoxButton'

interface IPropsFilterItem {
  typeInput: string
  data: IMocksDataFilter
  index: string
}
export default function FilterItem({ typeInput, data, index }: IPropsFilterItem) {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChildren = () => {
    setOpen(true)
  }
  const handleCloseChildren = () => {
    setOpen(false)
  }

  return (
    <div className='ml-2'>
      <div className='flex cursor-pointer items-center justify-between'>
        {typeInput === 'radio' && <RadioButton id={`radio-title-${data.title}-${index}`} title={data.title} />}
        {typeInput === 'checkbox' && <CheckboxButton id={`checkbox-title-${data.title}-${index}`} title={data.title} />}
        {data.children && (
          <div>
            {open ? (
              <MinusIcon className='h-3 w-3' onClick={handleCloseChildren} />
            ) : (
              <PlusIcon className='h-3 w-3' onClick={handleOpenChildren} />
            )}
          </div>
        )}
      </div>
      {open && (
        <div className='ml-3'>
          {data.children?.map((item, index) => {
            return (
              <div key={index}>
                {typeInput === 'radio' && <RadioButton id={`radio-${index}`} title={item.title} />}
                {typeInput === 'checkbox' && <CheckboxButton id={`checkbox-${index}`} title={item.title} />}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
