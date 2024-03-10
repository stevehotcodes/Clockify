import React from 'react'
import '../SideNavbarAdmin/SideNavbarAdmin.scss'
// import { TbLayoutDashboard} from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa6";
import { TbCashOff } from "react-icons/tb";
import { GrSchedules } from "react-icons/gr";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { PiTimerFill } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { CiLogout } from "react-icons/ci";


const SideNavbarAdmin = () => {
  return (
    <div className='sidenavbar-container'>
        <div className='nav-icon-wrapper'>
          <FaHome/>
            <span>Home</span>
        </div>

        <div className='nav-icon-wrapper'>
          <FaPeopleGroup/>
            <span>Employees</span>
        </div>
        <div className='nav-icon-wrapper'>
           <FaBusinessTime/>
            <span>Attendance</span>
        </div>
        <div className='nav-icon-wrapper'>
            <FaPeopleArrows/>
            <span>Positions</span>
        </div>

        <div className='nav-icon-wrapper'>
            <GrSchedules/>
            <span>Schedules</span>
        </div>

        <div className='nav-icon-wrapper'>
            <TbCashOff/>
            <span>Deductions</span>
        </div>

        <div className='nav-icon-wrapper'>
            <LiaCashRegisterSolid/>
            <span>Cash Advances</span>
        </div>

        <div className='nav-icon-wrapper'>
            <LiaCashRegisterSolid/>
            <span>Overtime</span>
        </div>

        <div className='nav-icon-wrapper'>
            <MdOutlinePayments/>
            <span>Payroll</span>
            
        </div>


        <div className='nav-icon-wrapper'>
            <CiLogout/>
            <span>Log out</span>
        </div>

        

         
      


    </div>
  )
}

export default SideNavbarAdmin