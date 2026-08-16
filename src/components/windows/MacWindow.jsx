import React from 'react'
import { Rnd } from "react-rnd"
import "./MacWindow.scss"

const MacWindow = ({ children }) => {
  return (
    <Rnd>
      <div className='window'>
        <nav className='window-nav'>
          <div className='dots'>
            <div className="red-dot dot"></div>
            <div className="yellow-dot dot"></div>
            <div className="green-dot dot"></div>
          </div>
          <div className='title'>
            <p>Arnav - zsh</p>
          </div>
        </nav>
        <div className='main-content'>
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindow