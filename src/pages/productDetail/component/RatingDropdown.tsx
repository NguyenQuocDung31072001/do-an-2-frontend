import React from 'react'

export default function RatingDropdown() {
  const [isEnter, setIsEnter] = React.useState<boolean>(false)
  const [activeKey, setActiveKey] = React.useState<number | string>('')

  const dataList = ['5 ngôi sao', '4 ngôi sao', '3 ngôi sao', '2 ngôi sao', '1 ngôi sao']

  const style = isEnter
    ? 'px-4 py-2 border-[1px] border-black cursor-pointer font-medium'
    : 'px-4 py-2 border-[1px] border-gray-200 cursor-pointer font-medium'

  const renderDropdown = React.useMemo(() => {
    return dataList.map((data, index) => {
      return (
        <div
          key={index}
          className={`w-[150px] cursor-pointer px-4 py-1 ${activeKey === index ? 'bg-gray-200' : ''}`}
          onMouseEnter={() => setActiveKey(index)}
          onMouseLeave={() => setActiveKey('')}
        >
          <p className='text-[12px]'>{data}</p>
        </div>
      )
    })
  }, [activeKey])

  return (
    <div className='relative' onMouseEnter={() => setIsEnter(true)} onMouseLeave={() => setIsEnter(false)}>
      <div className={`${style} w-[100px]`}>Tất cả</div>
      {isEnter && <div className='absolute py-2 shadow-xl'>{renderDropdown}</div>}
    </div>
  )
}
