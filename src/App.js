import React from 'react'
import { Router } from '@reach/router'

import Home from './Home'
import Session from './Session'
import ThemeSwitch from './components/ThemeSwitch'

function App() {
  return (
    <>
      <ThemeSwitch />
      <Router>
        <Home path="/" />
        <Session path="/session/:sessionId" />
      </Router>
    </>
  )
}

export default App
