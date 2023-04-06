import React from 'react'
import { IPropsIcon } from '../types/icon.types'

export default function PlusIcon({ className = 'h-6 w-6', onClick = () => {} }: IPropsIcon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={className}
      onClick={onClick}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
    </svg>
  )
}
