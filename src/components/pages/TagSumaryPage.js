import React from 'react';
import Button from '../Button';
import Header from '../Header';
import Tag from '../tag-constructor/Tag';
import { useHistory } from 'react-router-dom';
import AppBody from '../AppBody';
import Footer from '../Footer';
import Input from '../Input';

export default function TagSumaryPage({ TAGs, onChange, onRemove }) {
  let history = useHistory();

  const handleChange = (newQuantity, index) => {
    const newTag = {
      typedName: TAGs[index].typedName,
      fontFamily: TAGs[index].fontFamily,
      insideColor: TAGs[index].insideColor,
      outsideColor: TAGs[index].outsideColor,
      quantity: newQuantity,
    };
    onChange(index, newTag);
  };

  const handleDelete = (index) => {
    onRemove(index);
  };

  return (
    <>
      <Header subtitle="Designed Tags">
        <Button onClick={() => history.push('/')} icon={'home'} />
        <Button
          onClick={() => history.push('/tag-constructor')}
          icon={'navigate_before'}
        />
      </Header>
      <AppBody>
        {TAGs.map((tag, index) => {
          const {
            typedName,
            fontFamily,
            insideColor,
            outsideColor,
            quantity,
          } = tag;
          return (
            <div key={index} style={styles.divLabel}>
              <Tag size={90} tag={tag} spaceBetween={0} startPosition={0} />
              <div style={{ margin: '0px 20px', width: '80%' }}>
                <p>
                  Tag Name:{' '}
                  <span style={{ color: '#25292b' }}>{typedName}</span>
                </p>
                <p>
                  Font Type:{' '}
                  <span style={{ color: '#25292b' }}>{fontFamily}</span>
                </p>
                <p>
                  Colors:{' '}
                  <span style={{ color: '#25292b' }}>
                    {insideColor + ' & ' + outsideColor}
                  </span>
                </p>
              </div>
              <div style={styles.divFlexColumn}>
                <Input
                  width={50}
                  type={'number'}
                  value={quantity}
                  onChange={(newNumber) => handleChange(newNumber, index)}
                />
                <Button
                  onClick={() => handleDelete(index)}
                  icon={'delete_forever'}
                />
              </div>
            </div>
          );
        })}
        <div style={styles.divFlexRow}>
          <Button
            style={styles.button}
            onClick={() => history.push('/tag-constructor')}
          >
            Design Another
          </Button>
          <Button
            style={styles.button}
            onClick={() => console.log('purchase clicked')}
          >
            Purchase
          </Button>
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
    fontSize: 'calc(5px + 1vmin)',
    backgroundColor: '#882aa2',
  },
  divFlexRow: {
    minWidth: '150px',
    maxWidth: '350px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  divLabel: {
    fontSize: 'calc(7px + 1vmin)',
    display: 'flex',
    minWidth: '150px',
    maxWidth: '350px',
    justifyContent: 'space-between',
    width: '80vw',
    color: '#882aa2',
    fontFamily: 'Asap',
    fontWeight: '600',
  },
  divIcons: {
    fontSize: 'calc(5px + 1vmin)',
    display: 'flex',
    fontFamily: 'Asap',
    minWidth: '50px',
    maxWidth: '80px',
  },
  divFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
};
