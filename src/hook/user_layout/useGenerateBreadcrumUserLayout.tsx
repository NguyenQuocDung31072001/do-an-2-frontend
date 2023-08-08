import React from 'react'
import { useCustomBreadcrumb } from '../useCustomBreadcrumb'
import { useLocation } from 'react-router-dom'
import { PathRouter } from '../../constant/path.router'

export default function useGenerateBreadcrumUserLayout() {
  const { getRouteHome, getRouteAccountCenter, getRouteAccountInfo, getRouteAccountSecurity } = useCustomBreadcrumb()
  const { pathname } = useLocation()

  //condition
  const isUserCenter = pathname.endsWith(PathRouter.USER.INDEX)
  const isUserAccountSetting = pathname.endsWith(PathRouter.USER.ACCOUNT_SETTING)
  const isUserSecurity = pathname.endsWith(PathRouter.USER.SECURITY)

  //generate

  if (isUserCenter) {
    return [
      {
        title: getRouteHome({})
      },
      {
        title: getRouteAccountCenter({ isText: true })
      }
    ]
  } else if (isUserAccountSetting) {
    return [
      {
        title: getRouteHome({})
      },
      {
        title: getRouteAccountCenter({})
      },
      {
        title: getRouteAccountInfo()
      }
    ]
  } else if (isUserSecurity) {
    return [
      {
        title: getRouteHome({})
      },
      {
        title: getRouteAccountCenter({})
      },
      {
        title: getRouteAccountSecurity()
      }
    ]
  } else {
    return []
  }
}
