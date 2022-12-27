import { useState } from 'react'
import './App.css'
import Desktop from './components/Desktop/Desktop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
  <Desktop />

     
    </div>
  )
}

export default App
