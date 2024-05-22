import './App.css'
import Deck from './components/deck'
import Header from './components/header'
import WinMessage from './components/winMessage'
import { ContextProvider } from './context/context'

function App() {

  return (
    <ContextProvider>
      <Header/>
      <Deck/>
      <WinMessage/>
    </ContextProvider>
  )
}

export default App
