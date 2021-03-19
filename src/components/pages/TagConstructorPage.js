import React from 'react';
import Tag from '../tag-constructor/Tag';
import DiscProperties from '../tag-constructor/DiscProperties';
import Header from '../Header';
import Footer from '../Footer';
import AppBody from '../AppBody';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

export default function TagConstructorPage() {
  let history = useHistory();

  const [tag, setTag] = React.useState({
    typedName: '',
    fontFamily: 'serif',
    insideColor: '',
    outsideColor: '',
  });

  const handleNameInput = (newName) => {
    setTag({ ...tag, name: newName });
  };

  const handleFontInput = (newFont) => {
    setTag({ ...tag, fontFamily: newFont });
  };

  const [startPosition, setStartPosition] = React.useState(0);
  const handleStartInput = (newPosition) => {
    setStartPosition(newPosition);
  };

  const [spaceBetween, setSpaceBetween] = React.useState(0);
  const handleSpaceInput = (newValue) => {
    setSpaceBetween(newValue);
  };

  const handleHistoryClick = () => {
    // setTypedName('');
    // setFontFamily('');
  };

  const handleFinishClick = () => {
    console.log(tag);
    return;
    history.push('/tag-constructor/sumary');
  };

  return (
    <>
      <Header>
        <Button onClick={handleHistoryClick} icon={'history'} text={''} />
        <Button
          onClick={() => history.push('/')}
          icon={'navigate_before'}
          text={''}
        />
      </Header>
      <AppBody>
        <Tag
          tag={tag}
          spaceBetween={spaceBetween}
          startPosition={startPosition}
        />
        <DiscProperties
          tag={tag}
          spaceBetween={spaceBetween}
          startPosition={startPosition}
          onTypedName={handleNameInput}
          onFontSelected={handleFontInput}
          onPositionSelected={handleStartInput}
          onSpaceSelected={handleSpaceInput}
        />
        <Button
          style={styles.button}
          onClick={handleFinishClick}
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
