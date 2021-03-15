import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import { useHistory } from 'react-router-dom';
import SettingsButton from '../SettingsButton';

export default function AddressesPage() {
  let history = useHistory();
  return (
    <>
      <Header>
        <SettingsButton />
        <Button
          onClick={() => history.push('/')}
          icon={'navigate_before'}
          text={''}
        />
      </Header>
      <AppBody>AddressesPage</AppBody>
      <Footer>
        <Button onClick={() => history.push('/')} text={'Home'} />
        <Button
          onClick={() => history.push('/tag-constructor')}
          text={'Tag Designer'}
        />
        <Button
          onClick={() => history.push('/contact-form')}
          text={'Contact Us'}
        />
      </Footer>
    </>
  );
}
