import React, {useState,useEffect} from 'react'
import {FaBell, FaCog, FaGlobe, FaSignOutAlt} from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'
import './Header.css'

const Header = () => {
    const [currentTime, setCurrentTime] = useState('')
    const [showDropdown, setShowDropdown] = useState(false);

    const getCurrentTime = () => {
        const now = new Date()
        return now.toLocaleTimeString()   // Returns time as HH:MM:SS
    }

// Update time every second
useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // Update every 1000ms (1 second)

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array to run only on mount/unmount


    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }
    

  return (
    <header className='bg-container'>
      <div className='header'>
        <div className="header-left">
        <button className='menu-button'></button>
        <h1>DB4CLOUD</h1>
        </div>

        <div className="header-right">
          {/*  <p>You cannot mark attendence from this network</p> */}

                {/* Time display*/ }
                <div className="time-box">
                    <BiTime className='time-icon' />
                    <span>{currentTime}</span>
                </div>

                {/*Icons for notificatins, settings, etc. */}
                <FaBell className='icon' title='Notifications' />
                <FaCog className="icon" title="Settings" />
                <FaGlobe className='icon' title='Language' />

                {/* User Profile with dropdown*/ }

                <div className="user-profile" onClick={toggleDropdown}>
                    <div className="user-avatar">
                    < img src="https://th.bing.com/th/id/OIP.Pgv1PargHCECE7gCB5kJ-wHaKx?rs=1&pid=ImgDetMain" 
                alt="user-Avatar" className="avatar" />
                    </div>
                    <span className="user-name">Sangeeta</span>

{showDropdown && (
    <div className="dropdown">
        <ul>
            <li>Profile</li>
            <li>Setting</li>
            <li>
                <FaSignOutAlt /> Logout
            </li>
        </ul>
    </div>
)}

</div>

     {  /*      <div className="user-info">
                <span className='user-name'>Shalu</span>
                < img src="https://th.bing.com/th/id/OIP.Pgv1PargHCECE7gCB5kJ-wHaKx?rs=1&pid=ImgDetMain" 
                alt="user-Avatar" className="avatar" />
            </div>
            */ }
        </div>
        
        
      </div>

    </header>
  )
}

export default Header
