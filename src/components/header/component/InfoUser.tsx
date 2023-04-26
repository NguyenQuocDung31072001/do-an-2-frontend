import React from 'react'

//icon
import GlobalIcon from '../../../icon/GlobalIcon'
import HeartIcon from '../../../icon/HeartIcon'
import ProfileIcon from '../../../icon/ProfileIcon'
import MenuHeader from '../../menu/MenuHeader'
import MenuProfileIcon from '../../menu/MenuProfileIcon'

type TypeIcon = 'Profile' | 'Menu' | 'Heart' | 'Global' | ''

export default function InfoUser() {
  const [active, setActive] = React.useState<TypeIcon>()

  return (
    <div className='flex h-full items-center' onMouseLeave={() => setActive('')}>
      <div
        className={`cursor-pointer px-2 font-medium ${active === 'Profile' ? 'bg-white' : ''}`}
        onMouseEnter={() => setActive('Profile')}
      >
        {/* <ProfileIcon className='h-full w-10 py-4 px-2 font-bold text-gray-500' /> */}
        <MenuProfileIcon />
      </div>
      <div
        className={`cursor-pointer px-2 font-medium ${active === 'Menu' ? 'bg-white' : ''}`}
        onMouseEnter={() => setActive('Menu')}
      >
        <MenuHeader />
      </div>
      <div
        className={`cursor-pointer px-2 font-medium ${active === 'Heart' ? 'bg-white' : ''}`}
        onMouseEnter={() => setActive('Heart')}
      >
        <HeartIcon className='h-full w-10 py-4 px-2 font-bold text-gray-500' />
      </div>
      <div
        className={`cursor-pointer px-2 font-medium ${active === 'Global' ? 'bg-white' : ''}`}
        onMouseEnter={() => setActive('Global')}
      >
        <GlobalIcon className='h-full w-10 py-4 px-2 font-bold text-gray-500' />
      </div>
    </div>
  )
}
