import React from 'react'
import CartIcon from '../../icon/CartIcon'
import MiniCart from '../cart/MiniCart'

export default function MenuHeader() {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='relative'>
      <CartIcon />
      {open && (
        <div className='absolute left-[-200px] w-[380px] bg-white p-4 shadow-xl'>
          <MiniCart />
        </div>
      )}
    </div>
  )
}
