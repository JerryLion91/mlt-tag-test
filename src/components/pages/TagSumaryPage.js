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
            <div key={index} style={{ fontSize: '15px' }}>
              {/* <Tag tag={tag} spaceBetween={0} startPosition={0} /> */}
              <p>Tag Name: {tag.typedName}</p>
              <p>Font Family: {tag.fontFamily}</p>
            </div>
          );
        })}
        <div style={styles.divFlexRow}>
          <Button
            style={styles.button}
            onClick={() => history.push('/tag-constructor')}
            text={'Design Another'}
          />
          <Button
            style={styles.button}
            onClick={() => console.log('register clicked')}
            text={'Purchase'}
          />
        </div>
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
  divFlexRow: {
    minWidth: '150px',
    maxWidth: '350px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
};
