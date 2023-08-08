import { ReactNode } from 'react'

export type TBreadcrumbItem = {
  label: ReactNode | string
  isActive: boolean
  link: string
  isDisable: boolean
}
