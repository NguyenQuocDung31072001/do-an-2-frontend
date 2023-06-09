import React, { PropsWithChildren, createContext } from 'react'

interface AppContentProps {}
const AppContext = createContext<AppContentProps>({} as AppContentProps)

export const useAppContext = () => {
  return React.useContext(AppContext)
}

export const AppContextProvider: React.FC<Pick<PropsWithChildren<AppContentProps>, 'children'>> = ({ children }) => {
  const values = {}
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
