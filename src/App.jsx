import React from 'react'
import "./App.scss"
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/windows/MacWindow'

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <MacWindow>
        hello
      </MacWindow>
    </main>
  )
}

export default App