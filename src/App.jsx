import { useState } from 'react'
import './App.css'
import Desktop from './components/Desktop/Desktop'
import Mobile from './components/Mobile/Mobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
  <Desktop />

  <Mobile />
     
    </div>
  )
}

export default App
