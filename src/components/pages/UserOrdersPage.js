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
                {order.tags.map((tag, index) => {
                  return (
                    <div key={index} style={styles.divFlexRow}>
                      <Tag tag={tag} size={50} spaceBetween={0} />
                      <div>Tag Name: {tag.typedName}</div>
                      <div>Quantity: {tag.quantity}</div>
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

const styles = {
  cardParent: {
    minWidth: '150px',
    maxWidth: '400px',
    width: '40vw',
    padding: '20px',
    margin: '15px',
    border: 'solid 2px #DCDCDC',
    borderRadius: '5px',
    color: '#882aa2',
    fontWeight: '500',
  },
  card: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    margin: '15px',
  },
  divFlexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
};
