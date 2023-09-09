import './App.css'
import { AppContextProvider } from './context/AppContext'
import useRoutersElement from './useRoutersElement'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const routerElement = useRoutersElement()
  return (
    <div className=''>
      <HelmetProvider>
        <AppContextProvider>{routerElement}</AppContextProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
