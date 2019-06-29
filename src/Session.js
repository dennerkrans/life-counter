import React, { useState, useEffect } from 'react'

function Session({ sessionId }) {
  const [playerCount, setPlayerCount] = useState()
  const [startingLife, setStartingLife] = useState()

  const setInitialState = session => {
    const params = new URLSearchParams(session)
    setPlayerCount(params.get('playerCount'))
    setStartingLife(params.get('startingLife'))
  }

  useEffect(() => {
    let session = localStorage.getItem(sessionId)
    if (!session) {
      session = window.location.search
      localStorage.setItem(sessionId, session)
    }
    setInitialState(session)
  }, [sessionId])

  return (
    <div className="session">
      <p>Players: {playerCount}</p>
      <p>Life: {startingLife}</p>
    </div>
  )
}

export default Session
