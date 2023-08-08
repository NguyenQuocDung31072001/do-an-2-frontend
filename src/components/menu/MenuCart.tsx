import React from 'react'
import CartIcon from '../../icon/CartIcon'
import MiniCart from '../cart/MiniCart'

export default function MenuCartNavigate() {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className=''>
      <CartIcon className='h-full w-10 py-4 px-2 font-bold text-gray-500' />
      {open && <MiniCart />}
    </div>
  )
}
