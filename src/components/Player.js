import React from 'react'

function Player({ id, name, life, updateLife }) {
  function addLife() {
    updateLife(id, life + 1)
  }

  function subtractLife() {
    updateLife(id, life - 1)
  }

  return (
    <div className="player">
      <div className="player-content">
        <p className="player-name">{name}</p>
        <div className="player-life">
          <p className="player-life--display">{life}</p>
          <div className="player-life--action player-life--action-subtract" onClick={subtractLife} />
          <div className="player-life--action player-life--action-add" onClick={addLife} />
        </div>
      </div>
    </div>
  )
}

export default Player
