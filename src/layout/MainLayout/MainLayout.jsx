import React from 'react'
import '../MainLayout/MainLayout.scss'
import useLocalStorage from '../../hooks/useLocalStorage';
import { useState } from 'react';
import EmployeeHome from '../EmployeeHome/EmployeeHome';
import AdminHome from '../Admin-Home/AdminHome';

const MainLayout = () => {
    const [userDetails, setUserDetails] = useLocalStorage('user', null);
    const [token, setToken] = useLocalStorage('token ', null);
    const[isAdmin, setAdmin]=useState('')


    console.log(`isAdmin:${isAdmin},token:${token},userDetails:${userDetails.role}`)


  return (
    <>
    {(userDetails.role=='user')?<EmployeeHome/>:<AdminHome/>}
    
    
    </>

  )
}

export default MainLayout