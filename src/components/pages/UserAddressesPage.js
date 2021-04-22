import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import SettingsButton from '../SettingsButton';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import CardAdress from '../CardAdress';

import styles from '../../styles/styles';

export default function AddressesPage() {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: '/' };

  const [addresses, setAddresses] = React.useState([
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
  ]);

  const addNewAddress = () => {
    setAddresses((prevState) => {
      const blankAddress = {
        firstName: '',
        lastName: '',
        street: '',
        country: '',
        city: '',
        postalCode: '',
        saved: false,
      };
      return [...prevState, blankAddress];
    });
    console.log('object');
  };

  const handleDelete = (index) => {
    console.log(`${index}: address index delete button clicked`);
  };

  const handleChange = (index) => {
    console.log(`${index}: address index change button clicked`);
  };

  return (
    <>
      <Header subtitle="My Addresses">
        <SettingsButton />
        <Button onClick={() => history.push(from)} icon={'navigate_before'} />
      </Header>
      <AppBody>
        {addresses.map((address, index) => {
          return (
            <CardAdress
              key={index}
              address={address}
              index={index}
              handleDelete={handleDelete}
              handleChange={handleChange}
            />
          );
        })}
        <div style={styles.divFlexRow}>
          <Button
            onClick={addNewAddress}
            icon={'add_location'}
            style={styles.btnUnfilledColor}
          >
            Add New Address
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
