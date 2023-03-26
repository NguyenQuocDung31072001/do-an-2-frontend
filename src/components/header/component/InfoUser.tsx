import React from 'react'

//icon
import CartIcon from '../../../icon/CartIcon'
import GlobalIcon from '../../../icon/GlobalIcon'
import HeartIcon from '../../../icon/HeartIcon'
import ProfileIcon from '../../../icon/ProfileIcon'

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
