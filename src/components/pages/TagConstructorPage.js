import React, { useState } from 'react';
import Tag from '../tag-constructor/Tag';
import DiscProperties from '../tag-constructor/DiscProperties';
import Header from '../Header';
import Footer from '../Footer';
import AppBody from '../AppBody';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

export default function TagConstructorPage() {
  let history = useHistory();

  const [typedName, setTypedName] = useState('');
  const handleNameInput = (newName) => {
    setTypedName(newName);
  };

  const [fontFamily, setFontFamily] = useState('serif');
  const handleFontInput = (newFont) => {
    setFontFamily(newFont);
  };

  const [startPosition, setStartPosition] = useState(0);
  const handleStartInput = (newPosition) => {
    setStartPosition(newPosition);
  };

  const [spaceBetween, setSpaceBetween] = useState(0);
  const handleSpaceInput = (newValue) => {
    setSpaceBetween(newValue);
  };

  return (
    <>
      <Header>
        <Button onClick={() => {}} icon={'history'} text={''} />
        <Button
          onClick={() => history.push('/')}
          icon={'navigate_before'}
          text={''}
        />
      </Header>
      <AppBody>
        <Tag
          typedName={typedName}
          fontFamily={fontFamily}
          spaceBetween={spaceBetween}
          startPosition={startPosition}
        />
        <DiscProperties
          onTypedName={handleNameInput}
          onFontSelected={handleFontInput}
          onPositionSelected={handleStartInput}
          onSpaceSelected={handleSpaceInput}
        />
        <Button
          style={styles.button}
          onClick={() => history.push('/tag-constructor/sumary')}
          icon={''}
          text={'Finish Design'}
        />
      </AppBody>
      <Footer />
    </>
  );
}

const styles = {
  button: {
    margin: '50px',
    padding: '8px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Asap , sans-serif',
    fontSize: 'calc(5px + 1.3vmin)',
    backgroundColor: '#882aa2',
  },
};
