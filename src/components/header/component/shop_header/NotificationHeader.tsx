import { BellFilled } from '@ant-design/icons'
import { Badge } from 'antd'
import React from 'react'
import useClickOutside from '../../../../hook/useClickOutside'

export default function NotificationHeader() {
  const [open, setOpen] = React.useState(false)
  const { element } = useClickOutside({
    element: (
      <div className='relative mx-4'>
        <Badge count={99} color='red'>
          <BellFilled onClick={() => setOpen(true)} className='cursor-pointer text-[24px] text-white' />
        </Badge>
        {open && (
          <div className='absolute -left-32 h-[300px] w-[200px] overflow-y-scroll rounded-[10px] border-[1px] border-gray-200 bg-white'>
            {Array(50)
              .fill(0)
              .map((_, index) => (
                <div>noti</div>
              ))}
          </div>
        )}
      </div>
    ),
    onClick: () => setOpen(false)
  })

  return element
}
