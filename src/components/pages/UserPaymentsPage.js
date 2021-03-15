import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import SettingsButton from '../SettingsButton';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';

export default function PaymentsPage() {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: '/' };

  return (
    <>
      <Header>
        <SettingsButton />
        <Button
          onClick={() => history.push(from)}
          icon={'navigate_before'}
          text={''}
        />
      </Header>
      <AppBody>PaymentsPage</AppBody>
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
