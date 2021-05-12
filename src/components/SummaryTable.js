import React from 'react';

import PropTypes from 'prop-types';

import styles from '../styles/styles';

export default function SummaryTable({ TAGs = [], shippingPrice }) {
  const totalTagsQuantity = TAGs.reduce((acc, tag) => {
    return acc + parseInt(tag.quantity) || 0;
  }, 0);
  // price for 1 tag === 1,20 pound
  const tagsPrice = (totalTagsQuantity * 1.2).toFixed(2);
  const calculatedTotalPrice = (
    parseFloat(tagsPrice) + shippingPrice || 0
  ).toFixed(2);

  return (
    <div style={styles.cardParent}>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Summary
      </div>
      <div
        style={{
          margin: '5px 5%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            width: '30%',
          }}
        >
          Total Tags:
        </span>
        <span
          style={{
            width: '20%',
          }}
        >
          {totalTagsQuantity}
        </span>
        <span
          style={{
            width: '50%',
            textAlign: 'right',
          }}
        >
          {`${tagsPrice} `}&#163;
        </span>
      </div>
      {shippingPrice !== undefined && (
        <div
          style={{
            margin: '5px 5%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              width: '30%',
            }}
          >
            Shipping:
          </span>

          {shippingPrice === 0 ? (
            <span
              style={{
                width: '20%',
              }}
            >
              FREE
            </span>
          ) : (
            <span
              style={{
                width: '20%',
              }}
            ></span>
          )}
          <span
            style={{
              width: '50%',
              textAlign: 'right',
            }}
          >
            {`${shippingPrice.toFixed(2)} `}&#163;
          </span>
        </div>
      )}
      <div
        style={{
          margin: '6px 5%',
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '2px solid #DCDCDC',
        }}
      >
        <span
          style={{
            width: '30%',
            textAlign: 'right',
          }}
        >
          Total:
        </span>
        <span
          style={{
            width: '20%',
          }}
        ></span>
        <span
          style={{
            width: '50%',
            textAlign: 'right',
          }}
        >
          {`${calculatedTotalPrice} `}&#163;
        </span>
      </div>
    </div>
  );
}

SummaryTable.propTypes = {
  TAGs: PropTypes.array.isRequired,
  shippingPrice: PropTypes.number,
};
