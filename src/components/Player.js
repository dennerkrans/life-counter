import React from 'react'

function Player({ name, life }) {
  return (
    <div className="player">
      <div className="player-content">
        <p className="player-name">{name}</p>
        <div className="player-life">
          <p className="player-life--display">{life}</p>
          <div className="player-life--action player-life--action-subtract" />
          <div className="player-life--action player-life--action-add" />
        </div>
      </div>
    </div>
  )
}

export default Player
