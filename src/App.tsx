import './App.css'
import useRoutersElement from './useRoutersElement'

function App() {
  const routerElement = useRoutersElement()
  return <div className=''>{routerElement}</div>
}

export default App
