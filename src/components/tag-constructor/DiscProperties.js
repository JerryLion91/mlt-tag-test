import React from 'react';
import Input from '../Input';
/*
import Modal from 'react-responsive-modal';
import Button from '../Button';

import styles from '../../styles/styles';
*/

import PropTypes from 'prop-types';

export default function DiscProperties({ tag, onChange }) {
  // const { typedName, fontFamily, insideColor, outsideColor } = props.tag;

  const handleTypingName = (newName) => {
    onChange({ ...tag, typedName: newName });
  };

  const handleSelectFont = ({ target }) => {
    onChange({ ...tag, fontFamily: target.value });
  };

  const handleSelectInsideColor = ({ target }) => {
    onChange({ ...tag, insideColor: target.value });
  };

  const handleSelectOutsideColor = ({ target }) => {
    onChange({ ...tag, outsideColor: target.value });
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
        value={tag.typedName}
        onChange={handleTypingName}
      />
      <label
        htmlFor="fontFamily"
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

      <br />
      <label
        htmlFor="insideColor"
        style={{
          color: '#882aa2',
          fontWeight: '600',
          fontSize: 'calc(8px + 1vmin)',
        }}
      >
        Inside Color:
      </label>
      <select
        defaultValue="black"
        name="insideColor"
        id="insideColor"
        onChange={handleSelectInsideColor}
      >
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>

      <br />
      <label
        htmlFor="outsideColor"
        style={{
          color: '#882aa2',
          fontWeight: '600',
          fontSize: 'calc(8px + 1vmin)',
        }}
      >
        Outside Color:
      </label>
      <select
        defaultValue="white"
        name="outsideColor"
        id="outsideColor"
        onChange={handleSelectOutsideColor}
      >
        <option value="white">White</option>
        <option value="Yellow">Yellow</option>
        <option value="gray">Gray</option>
      </select>
    </div>
  );
}

DiscProperties.propTypes = {
  tag: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
