import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Button from '../Button';
import Footer from '../Footer';
import Input from '../Input';
import AddressCard from '../AddressCard';

import styles from '../../styles/styles';

import { useFirestore } from '../../helpers/use-firestore';

export default function RegisterPage() {
  const auth = useAuth();

  let history = useHistory();

  const firestore = useFirestore();

  const [userName, setUserName] = React.useState('');
  const handleNameChange = (newName) => setUserName(newName);

  const [userPassword, setUserPassword] = React.useState('');
  const handlePasswordChange = (newPassword) => setUserPassword(newPassword);

  const [userRepeatedPassword, setUserRepeatedPassword] = React.useState('');
  const handleRepeatedPasswordChange = (newPassword) =>
    setUserRepeatedPassword(newPassword);

  const [userEmail, setUserEmail] = React.useState('');
  const handleEmailChange = (newEmail) => setUserEmail(newEmail);

  const [addressInput, setAddressInput] = React.useState(false);
  const handleDeleteAddress = () => {
    setAddressInput(false);
  };
  const handleChangeAddress = () => {
    setAddressInput(false);
  };

  const blankAddress = {
    firstName: '',
    lastName: '',
    street: '',
    country: '',
    city: '',
    postalCode: '',
    saved: false,
  };

  const handleRegister = () => {
    if (userPassword !== userRepeatedPassword) {
      alert('The password must be equal');
    }
    auth
      .signup(userEmail, userPassword, userName)
      .then((user) => {
        firestore.addUserDoc({
          uid: user.uid,
          displayName: userName,
          email: user.email,
          photoUrl: user.photoURL,
        });
        history.push('/');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert(errorMessage);
        }
        if (errorCode === 'auth/email-already-in-use') {
          alert(errorMessage);
        }
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <header style={styles.loginHeader}>
        <img
          src={'../logoLogin.svg'}
          alt={''}
          style={{ height: '60vh', maxHeight: '120px' }}
        />
        <span style={{ fontSize: 'calc(20px + 1.8vmin)', margin: '10px' }}>
          M.L.T. Designs
        </span>
      </header>
      <div style={styles.divFlexColumn}>
        <span style={styles.loginHeading1}>Register</span>
        <span style={styles.loginHeading2}>Hello! Please to meet you.</span>
        <Input
          type="text"
          label="Username"
          value={userName}
          onChange={handleNameChange}
        />
        <Input
          type="password"
          label="Password"
          value={userPassword}
          onChange={handlePasswordChange}
        />
        <Input
          type="password"
          label="Repeat Password"
          value={userRepeatedPassword}
          onChange={handleRepeatedPasswordChange}
        />
        <Input
          type="email"
          label="Email"
          value={userEmail}
          onChange={handleEmailChange}
        />
        {addressInput ? (
          <AddressCard
            address={blankAddress}
            index={0}
            handleDelete={handleDeleteAddress}
            handleChange={handleChangeAddress}
          />
        ) : (
          <div style={styles.divStyle}>
            <Button
              onClick={() => setAddressInput(true)}
              icon={'add_location'}
              style={styles.btnUnfilledColor}
            >
              Add New Address
            </Button>
          </div>
        )}

        <Button
          style={styles.btnFilledPurple}
          onClick={handleRegister}
          icon={''}
        >
          Register
        </Button>
      </div>
      <Footer />
    </>
  );
}
