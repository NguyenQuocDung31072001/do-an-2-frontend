import './App.css'
import { AppContextProvider } from './context/AppContext'
import useRoutersElement from './useRoutersElement'

function App() {
  const routerElement = useRoutersElement()
  return (
    <div className='mt-64'>
      <AppContextProvider>{routerElement}</AppContextProvider>
    </div>
  )
}

export default App
