import React, { PropsWithChildren, createContext } from 'react'
import { IFakeDataCategories } from '../mocks/categories'

interface MainHeaderContextProps {
  detailCategoryInfo: IFakeDataCategories

  setDetailCategoryInfo: React.Dispatch<React.SetStateAction<IFakeDataCategories>>
}
const MainHeaderContext = createContext<MainHeaderContextProps>({} as MainHeaderContextProps)

export const useMainHeaderContext = () => {
  return React.useContext(MainHeaderContext)
}

export const MainHeaderContextProvider: React.FC<Pick<PropsWithChildren<MainHeaderContextProps>, 'children'>> = ({
  children
}) => {
  const [detailCategoryInfo, setDetailCategoryInfo] = React.useState({} as IFakeDataCategories)

  const values = { detailCategoryInfo, setDetailCategoryInfo }

  return <MainHeaderContext.Provider value={values}>{children}</MainHeaderContext.Provider>
}
