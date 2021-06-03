import React from 'react';
import Modal from 'react-responsive-modal';

import { useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../helpers/use-auth';

import styles from '../styles/styles';

import Button from './Button';

export default function SettingsButton() {
  const auth = useAuth();
  const user = auth.user;
  let location = useLocation();
  let history = useHistory();
  const [showModal, setShowModal] = React.useState(false);

  const onSignOut = () => {
    auth.signout(() => history.push('/'));
    setShowModal(false);
  };

  const handleUserButton = () => {
    const userLocation = {
      pathname: '/user/profile',
      state: { from: location.pathname },
    };
    history.push(userLocation);
    setShowModal(false);
  };

  // const handlePaymentsButton = () => {
  //   const userLocation = {
  //     pathname: '/user/payments',
  //     state: { from: location.pathname },
  //   };
  //   history.push(userLocation);
  //   setShowModal(false)
  // };

  const handleAdressesButton = () => {
    const userLocation = {
      pathname: '/user/addresses',
      state: { from: location.pathname },
    };
    history.push(userLocation);
    setShowModal(false);
  };

  const handleOrdersButton = () => {
    const userLocation = {
      pathname: '/user/orders',
      state: { from: location.pathname },
    };
    history.push(userLocation);
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)} icon={'settings'} />
      <Modal
        styles={{
          modal: {
            position: 'absolute',
            right: '30%',
            top: '0px',
          },
        }}
        open={showModal}
        onClose={() => setShowModal(false)}
        showCloseIcon={false}
      >
        {user ? (
          <div style={styles.modalFlexColumn}>
            {user.displayName && (
              <p style={{ color: '#37474f' }}>
                Hello <br />
                {user.displayName}!
              </p>
            )}
            <Button onClick={handleUserButton} icon={'account_box'}>
              Profile
            </Button>
            {/* <Button
              onClick={handlePaymentsButton}
              icon={'account_balance_wallet'}
            >
              Payments
            </Button> */}
            <Button onClick={handleAdressesButton} icon={'location_on'}>
              Addresses
            </Button>
            <Button onClick={handleOrdersButton} icon={'local_mall'}>
              Orders
            </Button>
            <Button onClick={onSignOut} icon={'chevron_left'}>
              Logout
            </Button>
          </div>
        ) : (
          <div style={styles.modalFlexColumn}>
            <Button
              onClick={() => history.push('/login')}
              icon={'account_circle'}
            >
              Login
            </Button>
            <Button
              onClick={() => history.push('/login/register')}
              icon={'person_add'}
            >
              Register
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}

/**
 *   ModalReference

const ModalProperties = {
  open: {
    type: 'Boolean',
    default: 'required',
    description: 'Control if the modal is open or not',
  },
  onClose: {
    type: 'Function',
    default: 'required',
    description:
      'Fired when the Modal is requested to be closed by a click on the overlay or when user press esc key',
  },
  children: {
    type: 'Node',
    default: '',
    description: 'The content of the modal',
  },
  closeOnEsc: {
    type: 'Boolean',
    default: 'true',
    description: 'Is the modal closable when user press esc key',
  },
  closeOnOverlayClick: {
    type: 'Boolean',
    default: 'true',
    description: 'Is the modal closable when user click on overlay',
  },
  little: {
    type: 'Boolean',
    default: 'false',
    description:
      "Is the dialog centered (when you don't have a lot of content)",
  },
  showCloseIcon: {
    type: 'Boolean',
    default: 'true',
    description: 'Show the close icon',
  },
  closeIconSize: {
    type: 'Number',
    default: '28',
    description: 'Close icon size',
  },
  closeIconSvgPath: {
    type: 'Node',
    default: '',
    description: 'A valid svg path to show as icon',
  },
  classNames: {
    type: 'Object',
    default: '{}',
    description:
      'An object containing classNames to style the modal, can have properties "overlay" (classname for overlay div), "modal" (classname for modal content div), "closeIcon" (classname for close icon svg). You can customize the transition with "transitionEnter", "transitionEnterActive", "transitionExit", "transitionExitActive"',
  },
  styles: {
    type: 'Object',
    default: '{}',
    description:
      'An object containing the styles objects to style the modal, can have properties "overlay", "modal", "closeIcon"',
  },
  animationDuration: {
    type: 'Number',
    default: '500',
    description: 'Animation duration in milliseconds',
  },
};

*/
