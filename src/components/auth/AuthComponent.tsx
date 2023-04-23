import React from 'react'
import Login from './component/Login'
import Register from './component/Register'

export default function AuthComponent() {
  return (
    <div className='grid w-full grid-cols-2 '>
      <div className='col-span-1 border-r-[1px] border-gray-200 px-20'>
        <Login />
      </div>
      <div className='col-span-1 px-20'>
        <Register />
      </div>
    </div>
  )
}
