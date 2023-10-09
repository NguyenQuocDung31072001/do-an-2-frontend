import { ConfigProvider } from 'antd'
import './App.css'
import { AppContextProvider } from './context/AppContext'
import useRoutersElement from './useRoutersElement'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const routerElement = useRoutersElement()
  return (
    <div className=''>
      <HelmetProvider>
        <ConfigProvider>
          <AppContextProvider>{routerElement}</AppContextProvider>
        </ConfigProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
