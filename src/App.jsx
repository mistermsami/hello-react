import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./card.css"
import Api from "./Api.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Api/>
    </>
  )
}

export default App
