import React from 'react'

//icons
import SearchIcon from '../../../icon/SearchIcon'
import XIcon from '../../../icon/XIcon'

export default function InputSearch() {
  const inputElt = React.useRef(null)
  const [value, setValue] = React.useState<string>('')
  return (
    <div className='relative mr-10 flex items-center'>
      <input
        ref={inputElt}
        type='text'
        className='w-[200px] border-[1px] border-gray-500 px-2 py-2 text-[12px] text-black/80 focus:outline-none'
        placeholder='test'
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <div className='absolute right-[-35px] cursor-pointer border-[1px] border-black  bg-black hover:bg-black/80'>
        <SearchIcon className='mx-2 my-2 h-[18px] w-[18px] text-white' />
      </div>
      {value && (
        <XIcon
          className='absolute right-4 h-[14px] w-[14px] cursor-pointer text-gray-500 duration-100 hover:scale-125 hover:text-gray-500'
          onClick={() => setValue('')}
        />
      )}
    </div>
  )
}
