import React from 'react'

//component
import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'

export default function HomePages() {
  return (
    <div className='bg-gray-100'>
      <MainHeader />
      {Array(50)
        .fill(0)
        .map((_, index) => {
          return (
            <div key={index} className='p-10'>
              {index}
            </div>
          )
        })}
      <MainFooter />
    </div>
  )
}
