import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import './index.css'
import Home from './Home'
import Session from './Session'

import * as serviceWorker from './serviceWorker'

render(
  <Router>
    <Home path="/" />
    <Session path="/:sessionId" />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
