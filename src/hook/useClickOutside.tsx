import React, { ReactNode } from 'react'

interface IPropsHookCheckClickOutside {
  onClick: any
  element: ReactNode | JSX.Element
}
export default function useClickOutside({ onClick, element }: IPropsHookCheckClickOutside) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return {
    element: <div ref={ref}>{element}</div>
  }
}
