import React from 'react';
import Button from '../Button';
import Header from '../Header';
import { useHistory } from 'react-router-dom';

export default function TagSumaryPage() {
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
    </>
  );
}
