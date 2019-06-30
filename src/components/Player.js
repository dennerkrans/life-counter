import React from 'react'

function Player({ name, life }) {
  return (
    <div className="player">
      <div className="player-content">
        <p className="player-name">{name}</p>
        <p className="player-life">{life}</p>
      </div>
    </div>
  )
}

export default Player
