import React from 'react'
import "./App.scss"
import Dock from './components/Dock'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
    </main>
  )
}

export default App