import React from 'react'

//icon
import CartIcon from './icon/cart'
import GlobalIcon from './icon/global'
import HeartIcon from './icon/heart'
import ProfileIcon from './icon/profile'

export default function InfoUser() {
  return (
    <div className='flex'>
      <div className='px-2 font-medium'>
        <ProfileIcon />
      </div>
      <div className='px-2 font-medium'>
        <CartIcon />
      </div>
      <div className='px-2 font-medium'>
        <HeartIcon />
      </div>
      <div className='px-2 font-medium'>
        <GlobalIcon />
      </div>
    </div>
  )
}