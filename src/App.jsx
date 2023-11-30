import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/home"
import Services from './components/services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Services/>
      
    </>
  )
}

export default App
