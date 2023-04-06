import React from 'react'
import { IPropsIcon } from '../types/icon.types'

export default function MinusIcon({ className = 'h-6 w-6', onClick = () => {} }: IPropsIcon) {
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
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
    </svg>
  )
}
