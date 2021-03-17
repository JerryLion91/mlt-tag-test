import React from 'react';
import './input.css';

export default function Input({ type, label, value, onChange }) {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };
  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} required />
      <label>{label}</label>
    </div>
  );
}
