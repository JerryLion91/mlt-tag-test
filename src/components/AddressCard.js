import React from 'react';
import Input from './Input';
import Button from './Button';

import styles from '../styles/styles';

import PropTypes from 'prop-types';

export default function AddressCard({
  address,
  index,
  handleDeleteClick,
  handleSaveClick,
  handleChange,
  setDefault,
}) {
  const {
    firstName,
    lastName,
    street,
    country,
    city,
    postalCode,
    saved,
  } = address;

  const handleFirstNameChange = (newValue) => {
    // Validation
    handleChange({ ...address, firstName: newValue, saved: false }, index);
  };

  const handleLastNameChange = (newValue) => {
    // Validation
    handleChange({ ...address, lastName: newValue, saved: false }, index);
  };

  const handleStreetChange = (newValue) => {
    // Validation
    handleChange({ ...address, street: newValue, saved: false }, index);
  };

  const handleCountryChange = (newValue) => {
    // Validation
    handleChange({ ...address, country: newValue, saved: false }, index);
  };

  const handleCityChange = (newValue) => {
    // Validation
    handleChange({ ...address, city: newValue, saved: false }, index);
  };

  const handlePostalCodeChange = (newValue) => {
    // Validation
    handleChange({ ...address, postalCode: newValue, saved: false }, index);
  };

  return (
    <div style={styles.cardParent}>
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
        {saved ? (
          <>
            {handleDeleteClick !== undefined ? (
              <Button
                onClick={() => handleDeleteClick(index)}
                icon={'delete_forever'}
              />
            ) : (
              ''
            )}
          </>
        ) : (
          <>
            {handleSaveClick !== undefined ? (
              <Button onClick={() => handleSaveClick(index)} icon={'sync'} />
            ) : (
              ''
            )}
          </>
        )}
      </div>
      <div style={styles.card}>
        <Input
          type="text"
          label="First Name:"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <Input
          type="text"
          label="Last Name:"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <Input
          type="text"
          label="Street:"
          value={street}
          onChange={handleStreetChange}
        />
        <Input
          type="text"
          label="City:"
          value={city}
          onChange={handleCityChange}
        />
        <Input
          type="text"
          label="Country:"
          value={country}
          onChange={handleCountryChange}
        />
        <Input
          type="text"
          label="Postal Code:"
          value={postalCode}
          onChange={handlePostalCodeChange}
        />
      </div>
    </div>
  );
}

AddressCard.propTypes = {
  address: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  index: PropTypes.number,
  handleDeleteClick: PropTypes.func,
  handleSaveClick: PropTypes.func,
  setDefault: PropTypes.func,
};
