import { ConfigProvider } from 'antd'
import './App.css'
import { AppContextProvider } from './context/AppContext'
import useRoutersElement from './useRoutersElement'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  window.addEventListener('i_want_get_data', (e) => {
    window.postMessage(
      'return_data',
      JSON.stringify({
        data: {
          name: 'dung',
          project: 'do an tot nghiep'
        }
      })
    )
  })
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
