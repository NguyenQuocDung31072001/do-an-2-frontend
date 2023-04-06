import React from 'react'

export default function SideBarFilter() {
  return (
    <div className='h-[700px] w-[250px] overflow-y-scroll bg-red-100'>
      {Array(50)
        .fill(0)
        .map((data, index) => {
          return <div key={index}>{data + index}</div>
        })}
    </div>
  )
}
