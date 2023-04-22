import React from 'react'

type IDropdownCategory = {
  title: string
  dataList: string[]
  classNameItem?: string
  classNameParent?: string
}

export default function DropdownCategory({ title, dataList, classNameItem, classNameParent }: IDropdownCategory) {
  const [isEnter, setIsEnter] = React.useState<boolean>(false)
  const [activeKey, setActiveKey] = React.useState<number | string>('')

  const style = classNameParent ? classNameParent : 'w-[100px] cursor-pointer border-[1px] px-4 py-2 font-medium'

  const renderDropdown = React.useMemo(() => {
    return dataList.map((data, index) => {
      const styleChildren = classNameItem ? classNameItem : 'w-[150px] cursor-pointer px-4 py-1'
      return (
        <div
          key={index}
          className={`${styleChildren} ${activeKey === index ? 'bg-gray-200' : 'bg-white'}`}
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
      <div className={`${isEnter ? 'border-black' : 'border-gray-200'} ${style}`}>{title}</div>
      {isEnter && <div className='absolute py-2 shadow-xl'>{renderDropdown}</div>}
    </div>
  )
}
