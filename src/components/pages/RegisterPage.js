import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Button from '../Button';
import Footer from '../Footer';
import Input from '../Input';
import CardAdress from '../CardAdress';

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
      <header style={styles.header}>
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
        <span style={styles.heading1}>Register</span>
        <span style={styles.heading2}>Hello! Please to meet you.</span>
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
          <CardAdress
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
              style={styles.addNewButton}
            >
              Add New Address
            </Button>
          </div>
        )}

        <Button style={styles.button} onClick={handleRegister} icon={''}>
          Register
        </Button>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  header: {
    flex: '0 0 auto',
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#520369',
    fontFamily: "'Quicksand', sans-serif",
  },
  button: {
    margin: '25px 0px 5px 0px',
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Asap , sans-serif',
    backgroundColor: '#882aa2',
    alignSelf: 'stretch',
  },
  heading1: {
    color: '#37474f',
    fontFamily: 'Quicksand',
    fontWeight: 650,
    margin: '10px 0px',
    fontSize: 'calc(23px + 1vmin)',
    textAlign: 'left',
  },
  heading2: {
    color: '#7a7a7a',
    fontfamily: 'Asap',
    fontWeight: 400,
    fontSize: '16px',
    fontSize: 'calc(10px + 1vmin)',
    textAlign: 'left',
    margin: '10px 0px 50px 0px',
  },
  forgotBtn: {
    color: '#7a7a7a',
    fontFamily: 'Asap',
  },
  registerBtn: {
    color: '#882aa2',
    fontFamily: 'Asap',
    fontWeight: '700',
  },
  divFlexColumn: {
    minWidth: '150px',
    maxWidth: '350px',
    width: '70vw',
    margin: '5vh auto',
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
  },
  divFlexRow: {
    minWidth: '150px',
    maxWidth: '350px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  addNewButton: {
    alignSelf: 'flex-start',
    color: '#882aa2',
  },
  divStyle: {
    display: 'flex',
    minWidth: '150px',
    maxWidth: '400px',
    width: '40vw',
  },
};
