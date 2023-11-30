import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/home"
import Services from './components/services'
import QuienEs from './components/quienEs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <QuienEs/>
    <Services/>
   
      
    </>
  )
}

export default App
