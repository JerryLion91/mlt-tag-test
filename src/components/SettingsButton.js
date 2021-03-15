import React from 'react';
import Modal from 'react-responsive-modal';

import { useAuth } from '../helpers/use-auth';

import { useHistory, useLocation } from 'react-router-dom';
import Button from './Button';

export default function SettingsButton() {
  const auth = useAuth();
  const user = auth.user;
  let location = useLocation();
  let history = useHistory();

  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onSignOut = () => {
    auth.signout(() => history.push('/'));
    handleCloseModal();
  };

  return (
    <>
      <Button onClick={handleOpenModal} icon={'settings'} text={''} />
      <Modal
        styles={{
          modal: { position: 'absolute', right: '30%', top: '0px' },
        }}
        open={showModal}
        onClose={handleCloseModal}
        showCloseIcon={false}
      >
        {user ? (
          <div style={styles.modalFlexColumn}>
            {user.displayName && (
              <p>
                Hello <br />
                {user.displayName}!
              </p>
            )}
            <Button
              onClick={() => {
                history.push('/user');
                handleCloseModal();
              }}
              icon={'account_box'}
              text={'Profile'}
            />
            <Button
              onClick={() => {
                history.push('/user/payments');
                handleCloseModal();
              }}
              icon={'account_balance_wallet'}
              text={'Payments'}
            />
            <Button
              onClick={() => {
                history.push('/user/addresses');
                handleCloseModal();
              }}
              icon={'location_on'}
              text={'Addresses'}
            />
            <Button
              onClick={() => {
                history.push('/user/orders');
                handleCloseModal();
              }}
              icon={'local_mall'}
              text={'Orders'}
            />
            <Button onClick={onSignOut} icon={'chevron_left'} text={'Logout'} />
          </div>
        ) : (
          <div style={styles.modalFlexColumn}>
            <Button
              onClick={() => history.push('/login')}
              icon={'account_circle'}
              text={'Login'}
            />
            <Button
              onClick={() => history.push('/register')}
              icon={'person_add'}
              text={'Register'}
            />
          </div>
        )}
      </Modal>
    </>
  );
}

const styles = {
  modalFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    margin: '50px',
    padding: '12px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Asap , sans-serif',
    backgroundColor: '#882aa2',
  },
};
