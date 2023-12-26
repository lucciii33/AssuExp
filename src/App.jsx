import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Services from './components/services'
import QuienEs from './components/quienEs'
import { LastBanner } from './components/last-banner'
import AppRouter from './routes' 

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<AppRouter/>
		</>
	)
}

export default App
