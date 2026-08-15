import React from 'react'
import "./Navbar.scss"
import DateTime from './DateTime'
import BatteryStatus from './BatteryStatus'

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <img src="/public/nav-icons/apple.svg" alt="" />
        <h5>Arnav</h5>
            <p>File</p>
            <p>Window</p>
            <p>Terminal</p>
      </div>
      <div className="right">
        <img src="/public/nav-icons/wifi.svg" alt="" />
        <div className='battery'>
          <BatteryStatus/>
        </div>
        <div className='Date-Time'>
          <DateTime/>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar