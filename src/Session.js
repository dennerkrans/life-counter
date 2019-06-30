import React, { useState, useEffect } from 'react'
import Player from './components/Player'

/** Idea for session state structure example
 * This should be saved in localStorage using the `sessionId` to identify
 * the session. It should also update when the session state changes,
 * i.e. Player 1 loses 2 life, new life total 18, or Player 1 changes name
 * to `Daniel` update session state
 * {
 *   initialState: {
 *     playerCount: 4,
 *     startingLife: 20
 *   }
 *   players: [
 *     { name: 'Player 1', life: 20 },
 *     { name: 'Player 2', life: 13 },
 *     { name: 'Player 3', life: 27 },
 *     { name: 'Player 4', life: 11 },
 *   ]
 * }
 */

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
