import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';

import styles from '../../styles/styles';

import AddressCard from '../AddressCard';
import SummaryTable from '../SummaryTable';
import Modal from 'react-responsive-modal';

export default function TagShippingPage({
  TAGs,
  addressToShip,
  handleChangeAddress,
  shippingPrice,
}) {
  const auth = useAuth();
  const user = auth.user;

  // fake saved addresses
  const INITIAL_STATE = [
    {
      firstName: 'Jerry',
      lastName: 'Lion',
      street: 'Sorocaba, 843',
      country: 'Brazil',
      city: 'Varzea',
      postalCode: '13222-005',
      saved: true,
    },
    {
      firstName: 'Lucas',
      lastName: 'Santos',
      street: 'Somewhere, 843',
      country: 'Cayman Island',
      city: 'Island 1',
      postalCode: '00000-000',
      saved: true,
    },
  ];

  let history = useHistory();

  const handleChange = (newAddress, index) => {
    handleChangeAddress(newAddress);
  };

  const [showModal, setShowModal] = React.useState(false);
  const handleOpenAdreessesModal = () => {
    setShowModal(true);
  };

  const handleCloseAdreessesModal = () => {
    setShowModal(false);
  };

  const handleSelectAddress = (index) => {
    handleChangeAddress(INITIAL_STATE[index]);
    handleCloseAdreessesModal();
  };

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
              handleOpenAdreessesModal();
            }}
            icon={'cloud_download'}
            style={styles.btnUnfilledGray}
          >
            Send to my saved address
          </Button>
          <Modal
            styles={{
              modal: {
                // position: 'absolute',
                // right: '30%',
                // top: '20px',
              },
            }}
            open={showModal}
            onClose={handleCloseAdreessesModal}
            showCloseIcon={false}
          >
            {user ? (
              <div style={styles.modalFlexColumn}>
                {INITIAL_STATE.map((address, index) => {
                  return (
                    <div key={index}>
                      <Button
                        onClick={() => {
                          handleSelectAddress(index);
                        }}
                        icon={'place'}
                        style={styles.btnUnfilledGray}
                      >
                        {address.street}
                      </Button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>You must be logged in</p>
            )}
          </Modal>
        </div>
        <div style={styles.cardParent}>
          <AddressCard address={addressToShip} handleChange={handleChange} />
        </div>
        <SummaryTable TAGs={TAGs} shippingPrice={shippingPrice} />
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
