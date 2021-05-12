import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import SettingsButton from '../SettingsButton';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import AddressCard from '../AddressCard';

import styles from '../../styles/styles';
import Input from '../Input';

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
      detailed: false,
    },
    {
      firstName: 'Lucas',
      lastName: 'Santos',
      street: 'Somewhere, 843',
      country: 'Cayman Island',
      city: 'Island 1',
      postalCode: '00000-000',
      saved: true,
      detailed: false,
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
        detailed: true,
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

  const handleShowDetails = (index) => {
    setAddresses((prevState) => {
      const newAddressArray = Array.from(prevState);
      newAddressArray[index].detailed = true;
      return newAddressArray;
    });
  };
  const handleHideDetails = (index) => {
    setAddresses((prevState) => {
      const newAddressArray = Array.from(prevState);
      newAddressArray[index].detailed = false;
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
            <>
              {address.detailed ? (
                <div style={styles.cardParent}>
                  <AddressCard
                    key={index}
                    address={address}
                    index={index}
                    handleDeleteClick={handleDelete}
                    handleSaveClick={handleSave}
                    handleChange={handleChange}
                    setDefault={setDefault}
                  />
                  <div style={styles.divFlexRow}>
                    <Button
                      onClick={() => handleHideDetails(index)}
                      icon={'info'}
                      style={{
                        ...styles.btnUnfilledGray,
                        fontSize: 'calc(6px + 0.8vmin)',
                        margin: '10px 0px',
                      }}
                    >
                      Hide details
                    </Button>
                  </div>
                </div>
              ) : (
                <div style={styles.cardParent}>
                  <div>
                    <div style={styles.divFlexRow}>
                      {index === undefined ? (
                        <span style={{ alignSelf: 'center', margin: '10px' }}>
                          Address Details
                        </span>
                      ) : index === 0 ? (
                        <span style={{ alignSelf: 'center', margin: '10px' }}>
                          Default Address
                        </span>
                      ) : (
                        <div style={styles.divFlexRow}>
                          <span style={{ alignSelf: 'center', margin: '10px' }}>
                            Address {index + 1}
                          </span>
                          {setDefault !== undefined ? (
                            <Button
                              onClick={() => setDefault(index)}
                              icon={''}
                              style={{
                                ...styles.btnUnfilledGray,
                                border: '1px solid #7a7a7a',
                                borderRadius: '5px',
                                padding: '0px 5px',
                                fontSize: 'calc(7px + 0.8vmin)',
                              }}
                            >
                              Set Default
                            </Button>
                          ) : (
                            ''
                          )}
                        </div>
                      )}
                    </div>
                    <div style={styles.card}>
                      <Input
                        type="text"
                        label="Street:"
                        value={address.street}
                        onChange={() => {
                          console.log('street');
                        }}
                      />
                    </div>
                  </div>
                  <div style={styles.divFlexRow}>
                    <Button
                      onClick={() => handleShowDetails(index)}
                      icon={'info'}
                      style={{
                        ...styles.btnUnfilledGray,
                        fontSize: 'calc(6px + 0.8vmin)',
                        margin: '10px 0px',
                      }}
                    >
                      Show details
                    </Button>
                  </div>
                </div>
              )}
            </>
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
