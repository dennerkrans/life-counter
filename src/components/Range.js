import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

function Range({
  name,
  options,
  currentValue,
  onSelect,
  enableCustomPick = false,
}) {
  const [inputActive, setInputActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && Number(inputRef.current.value) === currentValue) {
      setInputActive(true);
    } else {
      setInputActive(false);
    }
  }, [currentValue]);

  const handleButtonClick = useCallback(
    (option) => {
      const event = {
        target: {
          value: option.toString(),
        },
      };
      onSelect(event);
    },
    [onSelect]
  );

  const handleInputChange = useCallback(
    (e) => {
      onSelect(e);
    },
    [onSelect]
  );

  return (
    <div className="range">
      {name && <h2 className="range-name">{name}</h2>}
      <div className="range-container">
        {options.map((option) => (
          <button
            className={`range-button ${
              option === currentValue ? "range-button--current" : ""
            }`}
            key={option}
            type="button"
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        ))}
        {enableCustomPick && (
          <input
            className={`range-input ${
              inputActive ? "range-input--current" : ""
            }`}
            ref={inputRef}
            type="number"
            onChange={handleInputChange}
            placeholder="Custom"
          />
        )}
      </div>
    </div>
  );
}

Range.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentValue: PropTypes.number,
  enableCustomPick: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default Range;
