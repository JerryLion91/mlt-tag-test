import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Button from '../Button';
import Footer from '../Footer';
import Input from '../Input';
import AddressCard from '../AddressCard';

import styles from '../../styles/styles';

import { useFirestore } from '../../service/use-firestore';

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

  const [showAddressInput, setShowAddressInput] = React.useState(false);

  const blankAddress = {
    firstName: '',
    lastName: '',
    street: '',
    country: '',
    city: '',
    postalCode: '',
    saved: false,
    detailed: true,
  };

  const [address, setAddress] = React.useState(blankAddress);
  const handleChangeAddress = (newAddress) => {
    setAddress(newAddress);
  };

  const handleRegister = () => {
    if (userPassword !== userRepeatedPassword) {
      alert('The password must be equal');
    }
    auth
      .signup(userEmail, userPassword, userName)
      .then((user) => {
        firestore.addUserDoc(user.uid, {
          displayName: userName,
          email: user.email,
          photoUrl: user.photoURL,
          addresses: [address],
          phone: '',
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
        {showAddressInput ? (
          <div style={styles.cardParent}>
            <AddressCard
              address={address}
              index={0}
              handleChange={handleChangeAddress}
            />
            <div style={styles.divStyle}>
              <Button
                onClick={() => setShowAddressInput(false)}
                icon={'edit_location'}
                style={styles.btnUnfilledColor}
              >
                Inform address later
              </Button>
            </div>
          </div>
        ) : (
          <div style={styles.divStyle}>
            <Button
              onClick={() => setShowAddressInput(true)}
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
