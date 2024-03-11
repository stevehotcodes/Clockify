import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/Login'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import HeaderAdmin from './layout/Header-Admin/HeaderAdmin'
import AdminHome from './layout/Admin-Home/AdminHome'
import SideNavbarAdmin from './layout/SideNavbarAdmin/SideNavbarAdmin'
import '@emotion/styled';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
         <Route   path="/" element={<Login />} />
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/admin" element={<AdminHome/>}/>
      </Routes>
      
    </>
  )
}

export default App
