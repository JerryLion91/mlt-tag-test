import React from 'react';
import './input.css';

export default function Input({ type, label, value, onChange, onFocus }) {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };
  const handleFocus = () => {
    if (onFocus) onFocus();
  };
  return (
    <div className="input-container">
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
