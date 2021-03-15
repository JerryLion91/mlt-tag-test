import React from 'react';

export default function DiscProperties(props) {
  const {
    onFontSelected,
    onTypedName,
    onPositionSelected,
    onSpaceSelected,
  } = props;

  const [space, setSpace] = React.useState(0);

  const handleTypingName = ({ target }) => {
    onTypedName(target.value);
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

  const { discProperties } = styles;
  return (
    <div style={discProperties}>
      <label htmlFor="desiredName"> Tag Name:</label>
      <input
        type="text"
        name="name"
        id="desiredName"
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
