import React, { useState, useRef, useCallback } from "react";

function Player({ id, name, life, updateLife, updateName }) {
  const [edit, setEdit] = useState(false);
  const [currentName, setCurrentName] = useState(name);
  const nameInput = useRef(null);

  const addLife = useCallback(() => {
    updateLife(id, life + 1);
  }, [id, life, updateLife]);

  const subtractLife = useCallback(() => {
    updateLife(id, life - 1);
  }, [id, life, updateLife]);

  const toggleEdit = useCallback(() => {
    if (!edit) {
      setEdit(true);
      // Focus on input after state update
      setTimeout(() => {
        if (nameInput.current) {
          nameInput.current.focus();
        }
      }, 100);
      return;
    }

    setEdit(false);
    if (currentName !== name) {
      updateName(id, currentName);
    }
  }, [edit, currentName, name, id, updateName]);

  const updateCurrentName = useCallback((e) => {
    setCurrentName(e.target.value);
  }, []);

  const onEnterBlur = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  }, []);

  return (
    <div className="player">
      <div className="player-content">
        <input
          type="text"
          className={`player-name${!edit ? " hidden" : ""}`}
          ref={nameInput}
          value={currentName}
          onBlur={toggleEdit}
          onChange={updateCurrentName}
          onKeyDown={onEnterBlur}
        />
        <p
          className={`player-name${edit ? " hidden" : ""}`}
          onClick={toggleEdit}
        >
          {currentName}
        </p>
        <div className="player-life">
          <p className="player-life--display">{life}</p>
          <div
            className="player-life--action player-life--action-subtract"
            onClick={subtractLife}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                subtractLife();
              }
            }}
          />
          <div
            className="player-life--action player-life--action-add"
            onClick={addLife}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                addLife();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
