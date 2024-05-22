import './App.css'
import Deck from './components/deck'
import Header from './components/header'
import { ContextProvider } from './context/context'

function App() {

  return (
    <ContextProvider>
      <Header/>
      <Deck/>
    </ContextProvider>
  )
}

export default App
