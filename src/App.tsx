import './App.css'
import Deck from './components/deck'
import ResetButton from './components/resetButton'
import { ContextProvider } from './context/context'

function App() {

  return (
    <ContextProvider>
      <ResetButton/>
      <Deck/>
    </ContextProvider>
  )
}

export default App
