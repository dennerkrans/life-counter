import React from 'react'
import ContentEditable from 'react-contenteditable'

function Player({ id, name, life, updateLife, updateName }) {
  function addLife() {
    updateLife(id, life + 1)
  }

  function subtractLife() {
    updateLife(id, life - 1)
  }

  function triggerUpdateName(e) {
    updateName(id, e.target.innerHTML)
  }

  function onEnterBlur(e) {
    if (e.key !== 'Enter') {
      return
    }
    e.preventDefault()
    e.target.blur()
  }

  return (
    <div className="player">
      <div className="player-content">
        <ContentEditable
          className="player-name"
          html={name}
          tagName="p"
          onBlur={triggerUpdateName}
          onKeyDown={onEnterBlur}
        />
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
