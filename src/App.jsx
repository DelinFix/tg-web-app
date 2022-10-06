import { useEffect } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import { useTelegram } from './hooks/useTelegram'

function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
      <Button onClick={onToggleButton}>Togle</Button>
    </div>
  )
}

export default App
