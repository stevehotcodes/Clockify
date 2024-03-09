import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/Login'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
         <Route   path="/" element={<Login />} />
      </Routes>
       
    </>
  )
}

export default App
