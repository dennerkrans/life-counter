import React from 'react'

function Player({ name, life }) {
  return (
    <div className="player">
      <p className="player-name">{name}</p>
      <p className="player-life">{life}</p>
    </div>
  )
}

export default Player
