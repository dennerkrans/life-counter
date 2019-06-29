import React, { useState, useEffect } from 'react'

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
