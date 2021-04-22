import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import SettingsButton from '../SettingsButton';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Tag from '../tag-constructor/Tag';
import Status from '../Status';

import styles from '../../styles/styles';

export default function OrdersPage() {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: '/' };

  const orders = [
    {
      tags: [
        {
          typedName: 'Jeremias',
          fontFamily: 'serif',
          insideColor: 'any',
          outsideColor: 'any',
          quantity: 10,
        },
      ],
      orderStatus: 'Submited',
    },
    {
      tags: [
        {
          typedName: 'Leonardo',
          fontFamily: 'arial',
          insideColor: 'any',
          outsideColor: 'any',
          quantity: 8,
        },
      ],
      orderStatus: 'Processed',
    },
    {
      tags: [
        {
          typedName: 'Lucas',
          fontFamily: 'monospace',
          insideColor: 'any',
          outsideColor: 'any',
          quantity: 12,
        },
      ],
      orderStatus: 'Delivered',
    },
    {
      tags: [
        {
          typedName: 'Francis',
          fontFamily: 'serif',
          insideColor: 'any',
          outsideColor: 'any',
          quantity: 40,
        },
        {
          typedName: 'Francis',
          fontFamily: 'serif',
          insideColor: 'any',
          outsideColor: 'any',
          quantity: 40,
        },
      ],
      orderStatus: 'Received',
    },
  ];

  return (
    <>
      <Header subtitle="My Orders">
        <SettingsButton />
        <Button onClick={() => history.push(from)} icon={'navigate_before'} />
      </Header>
      <AppBody>
        {orders.map((order, index) => {
          return (
            <div key={index} style={styles.cardParent}>
              <div>
                {/* 

                      <div>
                        <Input
                          width={40}
                          label={'Qtd'}
                          type={'number'}
                          value={quantity}
                          onChange={(newNumber) =>
                            handleChange(newNumber, index)
                          }
                        />
                        <Button
                          onClick={() => handleDelete(index)}
                          icon={'delete_forever'}
                        />
                      </div>
                    </div>
                  );
                })} */}
                {order.tags.map((tag, index) => {
                  const { typedName, quantity } = tag;
                  return (
                    <div
                      key={index}
                      style={{
                        ...styles.divFlexRow,
                        ...styles.card,
                      }}
                    >
                      <Tag tag={tag} size={60} spaceBetween={0} />
                      <div style={styles.card}>
                        <span>
                          Tag Name:{' '}
                          <span style={{ color: '#25292b' }}>{typedName}</span>
                        </span>
                        <br />
                        <span>
                          Quantity:{' '}
                          <span style={{ color: '#25292b' }}>{quantity}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Status status={order.orderStatus} />
            </div>
          );
        })}
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
