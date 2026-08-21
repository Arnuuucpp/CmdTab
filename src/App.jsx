import React from 'react'
import "./App.scss"
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Note from './components/windows/Note'

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Github/>
      <Note/>
    </main>
  )
}

export default App