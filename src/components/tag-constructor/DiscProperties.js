import React from 'react';
import Input from '../Input';
import Modal from 'react-responsive-modal';
import Button from '../Button';

export default function DiscProperties(props) {
  const {
    onFontSelected,
    onTypedName,
    onPositionSelected,
    onSpaceSelected,
    spaceBetween,
    startPosition,
  } = props;
  const { typedName, fontFamily } = props.tag;

  const [space, setSpace] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTypingName = (newName) => {
    onTypedName(newName);
  };

  const handleSelectFont = ({ target }) => {
    onFontSelected(target.value);
  };

  const handlePositionSelect = ({ target }) => {
    onPositionSelected(target.valueAsNumber);
  };

  const handleSpaceSelect = ({ target }) => {
    onSpaceSelected(target.valueAsNumber);
    setSpace(target.valueAsNumber);
  };

  return (
    <div style={styles.discProperties}>
      <Input
        type="text"
        label={'Tag Name:'}
        value={typedName}
        onChange={handleTypingName}
      />
      <label htmlFor="name">Font Type:</label>
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
        <option value="Kavoon">Kavoon</option>
        <option value="Lemon">Lemon</option>
        <option value="Salsa">Salsa</option>
      </select>
      {/* <label>
        Select starting point:
        <input
          type="range"
          name="start"
          min="0"
          max="360"
          step="1"
          onChange={handlePositionSelect}
        />
      </label>*/}
      {/* <label>
        Select space betwewn:
        <input
          type="range"
          name="space"
          min="0"
          max="1"
          step="0.001"
          onChange={handleSpaceSelect}
        />
      </label>
      <span>{space}</span> */}
    </div>
  );
}

const styles = {
  discProperties: {
    display: 'flex',
    flexDirection: 'column',
    color: '#520369',
  },
};
