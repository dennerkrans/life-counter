import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function Range({ options, currentValue, onSelect, enableCustomPick = false }) {
  const [inputActive, setInputActive] = useState(false)
  const inputRef = useRef(null)
  useEffect(() => {
    if (inputRef.current && Number(inputRef.current.value) === currentValue) {
      setInputActive(true)
    } else {
      setInputActive(false)
    }
  }, [currentValue])

  return (
    <div className="range">
      {options.map(option => (
        <button
          className={`range-button ${option === currentValue ? 'range-button--current' : ''}`}
          key={option}
          value={option}
          onClick={onSelect}
        >
          {option}
        </button>
      ))}
      {enableCustomPick && (
        <input
          className={`range-input ${inputActive ? 'range-input--current' : ''}`}
          ref={inputRef}
          type="number"
          onChange={onSelect}
        />
      )}
    </div>
  )
}

Range.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentValue: PropTypes.number,
  enableCustomPick: PropTypes.bool,
  onSelect: PropTypes.func,
}

export default Range
