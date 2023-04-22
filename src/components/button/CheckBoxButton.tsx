import React, { ReactNode } from 'react'

interface IPropsRadioButton {
  id: string
  title: string | ReactNode
  radioClassName?: string
  titleClassName?: string
}
export default function CheckboxButton({
  id,
  title,
  radioClassName = 'flex items-center py-[1px]',
  titleClassName = 'text-[12px] font-normal text-black/80 ml-2'
}: IPropsRadioButton) {
  const [checked, setChecked] = React.useState<boolean>(false)
  return (
    <div className={radioClassName} onClick={() => setChecked(!checked)}>
      <input id={id} type='checkbox' checked={checked} onChange={() => {}} />
      <p className={titleClassName}>{title}</p>
    </div>
  )
}
