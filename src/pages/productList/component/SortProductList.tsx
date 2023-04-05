import React from 'react'

//icon
import CheckIcon from '../../../icon/CheckIcon'
import ChevronDownIcon from '../../../icon/chevron/ChevronDownIcon'

//lib
import { motion } from 'framer-motion'

const categorySort = ['Giới thiệu', 'Mới đến', 'Đánh giá hàng đầu', 'Giá thấp đến cao', 'Giá cao đến thấp']

export default function SortProductList() {
  const [open, setOpen] = React.useState<boolean>(false)
  const [nameSelected, setNameSelected] = React.useState<string>('Giới thiệu')

  //function
  const handleMouseEnter = () => {
    setOpen(true)
  }
  const handleMouseLeave = () => {
    setOpen(false)
  }

  return (
    <div className='flex items-center text-[12px]'>
      <p className='mr-4'>Sắp xếp theo</p>
      <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='flex w-[170px] items-center justify-between border-[1px] border-black/80 py-2 px-4'>
          <p>{nameSelected}</p>
          {open && (
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} exit={{ rotate: 0 }}>
              <ChevronDownIcon className='h-4 w-4 text-gray-500' />
            </motion.div>
          )}
          {!open && (
            <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }}>
              <ChevronDownIcon className='h-4 w-4 text-gray-500' />
            </motion.div>
          )}
        </div>
        <div className='h-[5px] w-[170px] bg-white'></div>
        {open && (
          <motion.div
            initial={{ opacity: 0, translateY: '-10px' }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute top-10 w-[170px] drop-shadow-2xl'
          >
            {categorySort.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`flex cursor-pointer items-center justify-between bg-white py-2 px-4 hover:bg-gray-100 ${
                    nameSelected === data && 'font-bold'
                  }`}
                  onClick={() => setNameSelected(data)}
                >
                  <p>{data}</p>

                  {nameSelected === data && <CheckIcon className='h-4 w-4 font-bold' />}
                </div>
              )
            })}
          </motion.div>
        )}
      </div>
    </div>
  )
}
