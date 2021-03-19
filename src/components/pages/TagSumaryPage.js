import React from 'react';
import Button from '../Button';
import Header from '../Header';
import Tag from '../tag-constructor/Tag';
import { useHistory } from 'react-router-dom';
import AppBody from '../AppBody';
import Footer from '../Footer';

export default function TagSumaryPage({ TAGs }) {
  let history = useHistory();

  return (
    <>
      <Header subtitle="Designed Tags">
        <Button onClick={() => history.push('/')} icon={'home'} text={''} />
        <Button
          onClick={() => history.push('/tag-constructor')}
          icon={'navigate_before'}
          text={''}
        />
      </Header>
      <AppBody>
        {TAGs.map((tag, index) => {
          return (
            <div key={index}>
              <Tag tag={tag} spaceBetween={0} startPosition={0} />
            </div>
          );
        })}
        <Button
          style={styles.button}
          onClick={() => {}}
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
