import React from 'react'

//router
import { useRoutes } from 'react-router-dom'

//pages
import HomePages from './pages/home/HomePages'

//components

export default function useRoutersElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <HomePages />
    }
    // { path: "team", element: <AboutPage /> },
  ])

  return routerElement
}
