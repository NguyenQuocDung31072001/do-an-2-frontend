import './App.css'
import useRoutersElement from './useRoutersElement'

function App() {
  const routerElement = useRoutersElement()
  return <div className='bg-red-400 text-red-500 '>{routerElement}</div>
}

export default App
