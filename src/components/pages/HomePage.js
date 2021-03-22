import React from 'react';

import { useHistory } from 'react-router-dom';

import AppBody from '../AppBody';
import Footer from '../Footer';
import Header from '../Header';
import Button from '../Button';

import 'react-responsive-modal/styles.css';
import TagDisplay from '../TagDisplay';
import ExampleDisplay from '../ExampleDisplay';
import SettingsButton from '../SettingsButton';

export default function HomePage() {
  let history = useHistory();

  return (
    <>
      <Header>
        <SettingsButton />
      </Header>
      <AppBody>
        <TagDisplay />
        <Button
          style={styles.button}
          onClick={() => history.push('/tag-constructor')}
          icon={''}
          text={'Design your tag'}
        >
          Design your tag
        </Button>
        <ExampleDisplay />
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
  modalFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    margin: '50px',
    padding: '8px 40px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Asap , sans-serif',
    backgroundColor: '#882aa2',
  },
};

/**
 * ModalReference
 */
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
