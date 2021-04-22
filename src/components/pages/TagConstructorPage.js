import React from 'react';
import Tag from '../tag-constructor/Tag';
import DiscProperties from '../tag-constructor/DiscProperties';
import Header from '../Header';
import Footer from '../Footer';
import AppBody from '../AppBody';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

import styles from '../../styles/styles';

export default function TagConstructorPage({ onAddTag }) {
  let history = useHistory();

  const [tag, setTag] = React.useState({
    typedName: '',
    fontFamily: 'serif',
    insideColor: 'any',
    outsideColor: 'any',
    quantity: 1,
  });

  const handleTagChange = (newTag) => setTag(newTag);

  const [startPosition, setStartPosition] = React.useState(150);
  const handleStartInput = (newPosition) => {
    setStartPosition(newPosition);
  };

  const [spaceBetween, setSpaceBetween] = React.useState(0);
  const handleSpaceInput = (newValue) => {
    setSpaceBetween(newValue);
  };

  const handleHistoryClick = () => {
    setTag({
      typedName: '',
      fontFamily: 'serif',
      insideColor: 'any',
      outsideColor: 'any',
      quantity: 1,
    });
  };

  const handleFinishClick = () => {
    onAddTag(tag);
    history.push('/tag-constructor/sumary');
  };

  return (
    <>
      <Header>
        <Button onClick={handleHistoryClick} icon={'history'} />
        <Button onClick={() => history.push('/')} icon={'navigate_before'} />
      </Header>
      <AppBody>
        <Tag
          size={200}
          tag={tag}
          styles={{ margin: '20px' }}
          spaceBetween={spaceBetween}
          startPosition={startPosition}
        />
        <DiscProperties
          tag={tag}
          spaceBetween={spaceBetween}
          startPosition={startPosition}
          onChange={handleTagChange}
          onPositionSelected={handleStartInput}
          onSpaceSelected={handleSpaceInput}
        />
        <Button
          style={{
            ...styles.btnFilledPurple,
            // this btn inst in a parent div with width, alignSelf is solution
            alignSelf: 'center',
          }}
          onClick={handleFinishClick}
          icon={''}
        >
          Finish Design
        </Button>
      </AppBody>
      <Footer />
    </>
  );
}
