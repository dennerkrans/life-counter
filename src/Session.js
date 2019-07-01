import React, { useState, useEffect } from 'react'
import update from 'immutability-helper'
import Player from './components/Player'

const getParamAsNumber = name => {
  const params = new URLSearchParams(window.location.search)
  return Number(params.get(name))
}

function Session({ sessionId }) {
  const [initialState, setInitialState] = useState()
  const [players, setPlayers] = useState()

  useEffect(() => {
    let session = JSON.parse(localStorage.getItem(sessionId))
    if (!session) {
      const playerCount = getParamAsNumber('playerCount')
      const startingLife = getParamAsNumber('startingLife')
      const players = Array.from(Array(playerCount), (_, i) => ({
        id: i,
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
    initState(session, session.players)
  }, [sessionId])

  function initState(initialState, players) {
    setInitialState(initialState)
    setPlayers(players)
  }

  function reset() {
    initState(initialState, initialState.players)
  }

  function handleUpdateLife(id, life) {
    const playerIndex = players.findIndex(p => p.id === id)
    const updatedPlayer = update(players[playerIndex], { life: { $set: life } })
    const updatedPlayers = update(players, { $splice: [[playerIndex, 1, updatedPlayer]] })
    console.log(updatedPlayers)
    setPlayers(updatedPlayers)
  }

  if (!players) {
    return <p>Loading</p>
  }

  return (
    <div className="session">
      {players.length > 2 && (
        <div className="horizontal-prompt">
          <h2 className="horizontal-prompt--text">Rotate device into horizontal mode</h2>
        </div>
      )}
      <div
        className={`players${players.length === 2 ? ' players-two' : ''}${
          players.length > 2 ? ' players-vertical' : ''
        }`}
      >
        {players.map(player => (
          <Player key={player.name} updateLife={handleUpdateLife} {...player} />
        ))}
      </div>
    </div>
  )
}

export default Session
