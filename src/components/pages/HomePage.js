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

import { useKeypress } from '../../helpers/use-keypress';

import styles from '../../styles/styles';

import * as api from '../../service/apiService';

export default function HomePage() {
  const history = useHistory();

  // Shortcut to 'Design your tag' Button
  useKeypress('Enter', () => history.push('/tag-constructor'));

  const fetchUsers = async () => {
    const users = await api.getAllUsers();
    console.log(users);
  };

  fetchUsers();

  return (
    <>
      <Header>
        <SettingsButton />
      </Header>
      <AppBody>
        <TagDisplay />
        <Button
          style={{
            ...styles.btnFilledPurple,
            // this btn inst in a parent div with width, alignSelf is solution
            alignSelf: 'center',
          }}
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
