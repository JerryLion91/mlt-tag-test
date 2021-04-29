import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';

import styles from '../../styles/styles';

export default function TagPaymentPage() {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: '/' };

  return (
    <>
      <Header subtitle={'Payment Options'}>
        <Button onClick={() => history.push('/')} icon={'home'} />
        <Button
          onClick={() => history.push('/tag-constructor/shipping')}
          icon={'navigate_before'}
        />
      </Header>

      <AppBody>
        TagPaymentPage
        <div style={styles.divFlexRow}>
          <Button
            style={styles.btnFilledPurple}
            onClick={() => history.push('/tag-constructor/shipping')}
          >
            Shipping
          </Button>
          <Button
            style={styles.btnFilledPurple}
            onClick={() => history.push('/tag-constructor/submited')}
          >
            Pay
          </Button>
        </div>
      </AppBody>
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
