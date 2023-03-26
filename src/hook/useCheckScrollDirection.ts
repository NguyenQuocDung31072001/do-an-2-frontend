import React from 'react'

export const EnumDirection = {
  UP: 'up',
  DOWN: 'down'
}

export default function useCheckScrollDirection() {
  let oldScrollY = 0

  const [direction, setDirection] = React.useState(EnumDirection.UP)

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection(EnumDirection.DOWN)
    } else {
      setDirection(EnumDirection.UP)
    }
    oldScrollY = window.scrollY
  }
  React.useEffect(() => {
    window.addEventListener('scroll', controlDirection)
    return () => {
      window.removeEventListener('scroll', controlDirection)
    }
  }, [])

  return { direction }
}
