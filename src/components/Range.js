import React from 'react'
import PropTypes from 'prop-types'

function Range({ options, currentValue, onSelect, enableCustomPick }) {
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
      {enableCustomPick && <input className={`range-button`} type="number" onChange={onSelect} />}
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
