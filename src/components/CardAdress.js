import React from 'react';
import Input from './Input';
import Button from './Button';

import PropTypes from 'prop-types';

export default function AdressCard({
  address,
  index,
  handleDelete,
  handleChange,
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

  return (
    <div style={styles.cardParent}>
      <div style={styles.divFlexRow}>
        <span style={{ alignSelf: 'center' }}>Address {index + 1}</span>
        {saved ? (
          <Button onClick={() => handleDelete(index)} icon={'delete_forever'} />
        ) : (
          <Button onClick={() => handleChange(index)} icon={'sync'} />
        )}
      </div>
      <div style={styles.card}>
        <Input
          type="text"
          label="First Name:"
          value={firstName}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Input
          type="text"
          label="Last Name:"
          value={lastName}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Input
          type="text"
          label="Street:"
          value={street}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Input
          type="text"
          label="City:"
          value={city}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Input
          type="text"
          label="Country:"
          value={country}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Input
          type="text"
          label="Postal Code:"
          value={postalCode}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </div>
    </div>
  );
}

AdressCard.propTypes = {
  address: PropTypes.object,
  index: PropTypes.number,
  handleDelete: PropTypes.func,
  handleChange: PropTypes.func,
};

const styles = {
  cardParent: {
    minWidth: '150px',
    maxWidth: '400px',
    width: '70vw',
    margin: '10px',
    padding: '5px',
    border: 'solid 2px #DCDCDC',
    borderRadius: '5px',
    color: '#882aa2',
    fontWeight: '500',
  },
  card: {
    width: '90%',
    margin: '0 5%',
    display: 'flex',
    flexDirection: 'column',
  },
  divFlexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
};
