import React, { useState, useRef } from 'react'
function Player({ id, name, life, updateLife, updateName }) {
  const [edit, setEdit] = useState(false)
  const [currentName, setCurrentName] = useState(name)
  const nameInput = useRef()

  function addLife() {
    updateLife(id, life + 1)
  }

  function subtractLife() {
    updateLife(id, life - 1)
  }

  function toggleEdit() {
    if (!edit) {
      setEdit(true)
      focusOnInput()
      return
    }

    setEdit(false)
    if (currentName !== name) {
      updateName(id, currentName)
    }
  }

  function focusOnInput() {
    setTimeout(() => nameInput.current.focus(), 100)
  }

  function updateCurrentName(e) {
    setCurrentName(e.target.value)
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
        <input
          type="text"
          className={`player-name${!edit ? ' hidden' : ''}`}
          ref={nameInput}
          value={currentName}
          onBlur={toggleEdit}
          onChange={updateCurrentName}
          onKeyDown={onEnterBlur}
        />
        <p className={`player-name${edit ? ' hidden' : ''}`} onClick={toggleEdit}>
          {currentName}
        </p>
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
