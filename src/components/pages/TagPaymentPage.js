import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';

import styles from '../../styles/styles';
import SummaryTable from '../SummaryTable';

export default function TagPaymentPage({ TAGs, shippingPrice }) {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: '/' };

  const [creditSelected, setCreditSelected] = React.useState(false);
  const [paypalSelected, setPaypalSelected] = React.useState(false);

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
        <div style={styles.cardParent}>
          <div style={{ ...styles.card, alignItems: 'flex-start' }}>
            <Button
              onClick={() => {
                setCreditSelected(true);
                setPaypalSelected(false);
              }}
              icon={
                creditSelected
                  ? 'radio_button_checked'
                  : 'radio_button_unchecked'
              }
            >
              CreditCard
            </Button>
          </div>
        </div>
        <div style={styles.cardParent}>
          <div style={{ ...styles.card, alignItems: 'flex-start' }}>
            <Button
              onClick={() => {
                setPaypalSelected(true);
                setCreditSelected(false);
              }}
              icon={
                paypalSelected
                  ? 'radio_button_checked'
                  : 'radio_button_unchecked'
              }
            >
              Paypal
            </Button>
          </div>
        </div>
        <SummaryTable TAGs={TAGs} shippingPrice={shippingPrice} />
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
