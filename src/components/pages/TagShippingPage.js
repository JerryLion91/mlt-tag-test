import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';

import styles from '../../styles/styles';
import AdressCard from '../AdressCard';
import SummaryTable from '../SummaryTable';

export default function TagShippingPage({
  TAGs,
  addressToShip,
  handleChangeAddress,
}) {
  const auth = useAuth();
  let history = useHistory();

  const handleChange = (newAddress, index) => {
    handleChangeAddress(newAddress);
  };

  const totalTagsQuantity = TAGs.reduce((acc, tag) => {
    return acc + parseInt(tag.quantity);
  }, 0);

  return (
    <>
      <Header subtitle={'Shipping Details'}>
        <Button onClick={() => history.push('/')} icon={'home'} />
        <Button
          onClick={() => history.push('/tag-constructor/sumary')}
          icon={'navigate_before'}
        />
      </Header>
      <AppBody>
        <div style={styles.divFlexRow}>
          <Button
            onClick={() => {
              console.log('saved addresses clicked');
            }}
            icon={'cloud_download'}
            style={styles.btnUnfilledGray}
          >
            Use my saved address
          </Button>
        </div>
        <AdressCard address={addressToShip} handleChange={handleChange} />
        <SummaryTable totalTagsQuantity={totalTagsQuantity} shippingPrice={0} />
        <div style={styles.divFlexRow}>
          <Button
            style={styles.btnFilledPurple}
            onClick={() => history.push('/tag-constructor/sumary')}
          >
            Back
          </Button>
          <Button
            style={styles.btnFilledPurple}
            onClick={() => {
              console.log('ADDRESS VALIDATION');
              history.push('/tag-constructor/payment');
            }}
          >
            Payment
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
