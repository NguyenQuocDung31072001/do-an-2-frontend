import './App.css'
import { AppContextProvider } from './context/AppContext'
import useRoutersElement from './useRoutersElement'

function App() {
  const routerElement = useRoutersElement()
  return (
    <div className=''>
      <AppContextProvider>{routerElement}</AppContextProvider>
    </div>
  )
}

export default App
