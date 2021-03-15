import React from 'react';
import './input.css';

export default function Input({ type, label }) {
  return (
    <div className="input-container">
      <input type={type} required />
      <label>{label}</label>
    </div>
  );
}
