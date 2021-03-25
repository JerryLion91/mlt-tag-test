import React from 'react';
import './input.css';

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
      style={{ width: width, margin: '30px 0px' }}
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
