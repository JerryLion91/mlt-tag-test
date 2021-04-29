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

  const [addresses, setAddresses] = React.useState(INITIAL_STATE);

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
  };

  const handleDelete = (index) => {
    setAddresses((prevState) => {
      const newAddressArray = prevState.filter((_, i) => {
        return i !== index;
      });
      return newAddressArray;
    });
  };

  const setDefault = (index) => {
    setAddresses((prevState) => {
      const newAddressArray = Array.from(prevState);

      const newDefaultAddress = newAddressArray.splice(index, 1);

      newAddressArray.unshift(newDefaultAddress[0]);

      return newAddressArray;
    });
  };

  const handleSave = (index) => {
    setAddresses((prevState) => {
      const newAddressArray = Array.from(prevState);

      //PLACE TO CHANGE DATA BANK
      newAddressArray[index].saved = true;

      return newAddressArray;
    });
  };

  const handleChange = (newAddress, index) => {
    setAddresses((prevState) => {
      const newAddressArray = Array.from(prevState);

      newAddressArray[index] = newAddress;

      return newAddressArray;
    });
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
              handleDeleteClick={handleDelete}
              handleSaveClick={handleSave}
              handleChange={handleChange}
              setDefault={setDefault}
            />
          );
        })}
        <div style={styles.divFlexRow}>
          <Button
            onClick={addNewAddress}
            icon={'add_location'}
            style={{ ...styles.btnUnfilledColor, margin: '10px 0px' }}
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
