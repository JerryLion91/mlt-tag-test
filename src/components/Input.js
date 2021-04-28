import React from 'react';

import PropTypes from 'prop-types';

import '../styles/input.css';

export default function Input({
  type,
  label,
  value,
  onChange,
  onFocus,
  width,
}) {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };
  const handleFocus = () => {
    if (onFocus) onFocus();
  };
  return (
    <div
      className="input-container"
      style={{ width: width, margin: '30px 0px 10px 0px' }}
    >
      <input
        type={type}
        value={value}
        onClick={handleFocus}
        onChange={handleChange}
        required
      />
      <label>{label}</label>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.string,
  width: PropTypes.number,
};
