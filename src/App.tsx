import './App.css'
import Deck from './components/deck'
import { ContextProvider } from './context/context'

function App() {

  return (
    <ContextProvider>
      <Deck/>
    </ContextProvider>
  )
}

export default App
