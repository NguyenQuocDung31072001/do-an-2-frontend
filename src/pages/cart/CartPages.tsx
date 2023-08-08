import React from 'react'
import ShowCart from './component/ShowCart'
import { PathRouter } from '../../constant/path.router'

export default function CartPages() {
  //useEffect
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex w-full flex-col items-center px-48 pb-8'>
      <ShowCart />
    </div>
  )
}
