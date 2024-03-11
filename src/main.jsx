import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import AdminHome from './layout/Admin-Home/AdminHome.jsx'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/*',
    element:<AdminHome/>
  },
 
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
