import React from 'react'
import ProfileMenuHeader from '../profile/ProfileMenuHeader'
import ProfileIcon from '../../icon/ProfileIcon'

export default function MenuProfileIcon() {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className=''>
      <ProfileIcon className='h-full w-10 py-4 px-2 font-bold text-gray-500' />
      {open && <ProfileMenuHeader />}
    </div>
  )
}
