import React from 'react';
import Input from '../Input';
import Modal from 'react-responsive-modal';
import Button from '../Button';

import styles from '../../styles/styles';

export default function DiscProperties(props) {
  const { tag, onChange } = props;

  const { typedName, fontFamily } = props.tag;

  const handleTypingName = (newName) => {
    onChange({ ...tag, typedName: newName });
  };

  const handleSelectFont = ({ target }) => {
    onChange({ ...tag, fontFamily: target.value });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Input
        type="text"
        label={'Tag Name:'}
        value={typedName}
        onChange={handleTypingName}
      />
      <label
        htmlFor="name"
        style={{
          color: '#882aa2',
          fontWeight: '600',
          fontSize: 'calc(8px + 1vmin)',
        }}
      >
        Font Type:
      </label>
      <select
        defaultValue=""
        name="font"
        id="fontFamily"
        onChange={handleSelectFont}
      >
        <option value="serif">Serif</option>
        <option value="arial">Arial</option>
        <option value="monospace">Monospace</option>

        <option value="Chicle">Chicle</option>
        <option value="Fredoka One">Fredoka One</option>
        <option value="Lemon">Lemon</option>
        <option value="Salsa">Salsa</option>
      </select>
    </div>
  );
}
