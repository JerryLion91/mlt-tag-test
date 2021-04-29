import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';

import styles from '../../styles/styles';

export default function TagSubmitedPage() {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: '/' };

  return (
    <>
      <Header subtitle={'Order Submited'}>
        <Button onClick={() => history.push('/')} icon={'home'} />
      </Header>

      <AppBody>We receive your order and soon will be shipped to you</AppBody>
      <Footer>
        <Button onClick={() => history.push('/')}>Home</Button>
        <Button onClick={() => history.push('/tag-constructor')}>
          Tag Designer
        </Button>
        <Button onClick={() => history.push('/contact-form')}>
          Contact Us
        </Button>
      </Footer>
    </>
  );
}
