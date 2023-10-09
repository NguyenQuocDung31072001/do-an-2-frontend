import React from 'react'
import EyeOpenIcon from '../../icon/eye/EyeOpenIcon'
import EyeCloseIcon from '../../icon/eye/EyeCloseIcon'

interface IPropsInputPassword {
  title: string
}
export default function InputPassword({ title }: IPropsInputPassword) {
  const [visible, setVisible] = React.useState<boolean>(false)
  return (
    <div className='relative w-[300px]'>
      <p className='text-[12px] text-gray-700'>{title}</p>
      <input
        type={visible ? 'text' : 'password'}
        className='w-full border-[1px] border-gray-400 px-4 py-2 text-[12px] text-black hover:border-black focus:outline-none '
      />
      <div className='absolute right-2 top-8'>
        {visible ? (
          <EyeOpenIcon className='h-4 w-4 cursor-pointer' onClick={() => setVisible(false)} />
        ) : (
          <EyeCloseIcon className='h-4 w-4 cursor-pointer' onClick={() => setVisible(true)} />
        )}
      </div>
    </div>
  )
}
