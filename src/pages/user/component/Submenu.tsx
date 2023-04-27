import React from 'react'
import MinusIcon from '../../../icon/MinusIcon'
import PlusIcon from '../../../icon/PlusIcon'
import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import { PathRouter } from '../../../constant/path.router'
import { useLocation } from 'react-router-dom'

export default function Submenu({
  menuItem
}: {
  menuItem: {
    title: string
    subTitle: string[]
  }
}) {
  const [isExpand, setIsExpand] = React.useState<boolean>(false)
  let location = useLocation()

  const generateNavLink = (name: string) => {
    let url = ''
    switch (name) {
      case 'Thông Tin Của Tôi':
        url = PathRouter.USER.ACCOUNT_SETTING.split('/')[1]
        break
      case 'Quản Lý Tài Khoản Của Tôi':
        url = PathRouter.USER.SECURITY.split('/')[1]
        break
    }
    return url
  }
  return (
    <div className='py-2'>
      <div className='flex cursor-pointer items-center justify-between ' onClick={() => setIsExpand(!isExpand)}>
        <p className='text-[16px] font-bold text-black'>{menuItem.title}</p>
        {isExpand ? <PlusIcon className='h-4 w-4 text-[12px] font-bold' /> : <MinusIcon className='h-4 w-4' />}
      </div>
      <motion.div
        key='element'
        initial={{ height: isExpand ? '0px' : '100%' }}
        animate={{ height: isExpand ? '100%' : '0px' }}
        exit={{ height: isExpand ? '0px' : '100%' }}
        transition={{ duration: 0.5 }}
        className='w-full overflow-hidden'
      >
        {menuItem.subTitle.map((menuSubItem, index) => {
          return (
            <div key={`menuSubitem${index}`} className='h-[30px] py-1 pl-4'>
              <NavLink
                to={generateNavLink(menuSubItem)}
                className={({ isActive }) => {
                  return `cursor-pointer text-[14px] ${
                    isActive && location.pathname !== PathRouter.USER.INDEX ? 'font-medium text-black' : 'text-gray-600'
                  } hover:text-black`
                }}
                end
              >
                {menuSubItem}
              </NavLink>
              {/* <p
                className='cursor-pointer text-[14px] text-gray-600 hover:text-black'
                onClick={() => handleClick(menuSubItem)}
              >
                {menuSubItem}
              </p> */}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
