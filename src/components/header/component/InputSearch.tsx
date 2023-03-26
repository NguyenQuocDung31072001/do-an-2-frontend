import React from 'react'
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
      {value && (
        <XIcon
          className='absolute right-4 h-[14px] w-[14px] cursor-pointer text-gray-500 hover:text-blue-400'
          onClick={() => setValue('')}
        />
      )}
    </div>
  )
}
