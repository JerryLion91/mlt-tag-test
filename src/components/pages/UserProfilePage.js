import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import SettingsButton from '../SettingsButton';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import { useFirestore } from '../../helpers/use-firestore';
import Input from '../Input';

export default function ProfilePage() {
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: '/' };

  const auth = useAuth();
  const { displayName, email, photoURL, uid } = auth.user;

  const [userName, setUserName] = React.useState(displayName);
  const handleUsernameChange = (newName) => setUserName(newName);

  const [userEmail, setUserEmail] = React.useState(email);
  const handleUserEmailChange = (newEmail) => setUserEmail(newEmail);

  return (
    <>
      <Header>
        <SettingsButton />
        <Button onClick={() => history.push(from)} icon={'navigate_before'} />
      </Header>
      <AppBody>
        <img
          src={photoURL}
          style={{ borderRadius: '50%', height: '10vh', margin: '40px' }}
        />
        <Input
          type="text"
          label="Username"
          value={userName}
          onChange={handleUsernameChange}
        />
        <Input
          type="email"
          label="Email"
          value={userEmail}
          onChange={handleUserEmailChange}
        />
        <Button style={styles.button} onClick={() => alert('update clicked')}>
          Update Password
        </Button>
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
  button: {
    margin: '25px 0px 5px 0px',
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Asap , sans-serif',
    backgroundColor: '#882aa2',
  },
};
