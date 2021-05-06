import React from 'react';
import Tag from '../tag-constructor/Tag';
import DiscProperties from '../tag-constructor/DiscProperties';
import Header from '../Header';
import Footer from '../Footer';
import AppBody from '../AppBody';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from '../../styles/styles';

export default function TagConstructorPage({ onAddTag }) {
  let history = useHistory();

  const [tag, setTag] = React.useState({
    typedName: '',
    fontFamily: 'serif',
    insideColor: 'black',
    outsideColor: 'white',
    quantity: 1,
  });

  const handleTagChange = (newTag) => setTag(newTag);

  const handleHistoryClick = () => {
    setTag({
      typedName: '',
      fontFamily: 'serif',
      insideColor: 'black',
      outsideColor: 'white',
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
        <Tag size={200} tag={tag} styles={{ margin: '20px' }} />
        <DiscProperties tag={tag} onChange={handleTagChange} />
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
      {/* This empity <p> will load the fonts */}
      <p style={{ fontFamily: 'Serif', visibility: 'hidden' }}>Serif</p>
      <p style={{ fontFamily: 'Arial', visibility: 'hidden' }}>Arial</p>
      <p style={{ fontFamily: 'Monospace', visibility: 'hidden' }}>Monospace</p>
      <p style={{ fontFamily: 'Chicle', visibility: 'hidden' }}>Chicle</p>
      <p style={{ fontFamily: 'Fredoka One', visibility: 'hidden' }}>Fredoka</p>
      <p style={{ fontFamily: 'Lemon', visibility: 'hidden' }}>Lemon</p>
      <p style={{ fontFamily: 'Salsa', visibility: 'hidden' }}>Salsa</p>
      <Footer />
    </>
  );
}

TagConstructorPage.propTypes = {
  onAddTag: PropTypes.func.isRequired,
};
