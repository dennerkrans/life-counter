import React, { useState, useEffect } from 'react'
import Player from './components/Player'

const getParamAsNumber = name => {
  const params = new URLSearchParams(window.location.search)
  return Number(params.get(name))
}

function Session({ sessionId }) {
  const [state, setState] = useState()

  const setInitialState = session => {
    setState(session)
  }

  useEffect(() => {
    let session = JSON.parse(localStorage.getItem(sessionId))
    if (!session) {
      const playerCount = getParamAsNumber('playerCount')
      const startingLife = getParamAsNumber('startingLife')
      const players = Array.from(Array(playerCount), (_, i) => ({
        name: `Player ${i + 1}`,
        life: startingLife,
      }))
      session = {
        initialState: {
          playerCount,
          startingLife,
        },
        players,
      }
      localStorage.setItem(sessionId, JSON.stringify(session))
    }
    setInitialState(session)
  }, [sessionId])

  if (!state) {
    return <p>Loading</p>
  }

  return (
    <div className="session">
      {state.players.map(player => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  )
}

export default Session
