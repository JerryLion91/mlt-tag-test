import React from 'react';
import Button from '../Button';
import Header from '../Header';
import Tag from '../tag-constructor/Tag';
import { useHistory } from 'react-router-dom';
import AppBody from '../AppBody';
import Footer from '../Footer';
import Input from '../Input';

import styles from '../../styles/styles';

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
            <div
              key={index}
              style={{
                ...styles.divFlexRow,
                ...styles.cardParent,
              }}
            >
              <Tag size={90} tag={tag} spaceBetween={0} startPosition={0} />
              <div style={styles.card}>
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
              <div>
                <Input
                  width={40}
                  label={'Qtd'}
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
            style={styles.btnFilledPurple}
            onClick={() => history.push('/tag-constructor')}
          >
            Design Another
          </Button>
          <Button
            style={styles.btnFilledPurple}
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
