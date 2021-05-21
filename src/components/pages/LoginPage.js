import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Button from '../Button';
import Footer from '../Footer';
import Input from '../Input';

import styles from '../../styles/styles';

export default function LoginPage() {
  const auth = useAuth();
  console.log(auth);
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };

  const [userEmail, setUserEmail] = React.useState('');
  const handleEmailChange = (newEmail) => setUserEmail(newEmail);

  const [userPassword, setUserPassword] = React.useState('');
  const handlePasswordChange = (newPassword) => setUserPassword(newPassword);

  const signInWithEmail = () => {
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        // Signed in
        // ...
        // console.log(user);
        history.push(from.pathname);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          alert(
            errorMessage +
              'DEVELOPER IDEIA: MESSAGE BOX ASKING TO REGISTER: IN CASE YES GO TO REGISTER, IN CASE NOT GO TO HOMEPAGE'
          );
          history.push('/login/register');
        }
        console.log(errorCode);

        console.log(errorMessage);
      });
  };

  const signInWithGoogle = () => {
    auth.signInWithGooglePopup(() => history.push(from.pathname));
  };

  const handleForgotPassword = () => {
    auth.sendPasswordResetEmail(userEmail);
    alert('We will send you an email to change the password');
  };

  return (
    <>
      <header style={styles.loginHeader}>
        <img
          src={'logoLogin.svg'}
          alt={''}
          style={{ height: '60vh', maxHeight: '120px' }}
        />
        <span style={{ fontSize: 'calc(20px + 1.8vmin)', margin: '10px' }}>
          M.L.T. Designs
        </span>
      </header>
      <div style={styles.divFlexColumn}>
        <span style={styles.loginHeading1}>Login</span>
        <span style={styles.loginHeading2}>
          Hi there! Nice to see you again
        </span>
        <Input
          type="email"
          label="Email"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          label="Password"
          value={userPassword}
          onChange={handlePasswordChange}
        />
        <Button
          style={styles.btnFilledPurple}
          onClick={signInWithEmail}
          icon={''}
        >
          Login
        </Button>
        <div style={styles.divFlexRow}>
          <Button style={styles.btnUnfilledGray} onClick={handleForgotPassword}>
            Forgot Password?
          </Button>
          <Button
            style={styles.btnUnfilledColor}
            onClick={() => history.push('/login/register')}
          >
            Register
          </Button>
        </div>
        <div style={{ position: 'relative' }}>
          <img
            src={'google.jpg'}
            alt={''}
            style={{
              height: '36px',
              width: '36px',
              position: 'absolute',
              left: '0',
              bottom: '0',
              margin: '25px 0px 5px 0px',
              border: 'solid 1px #520369',
              borderRadius: '5px',
            }}
          />
          <Button
            style={styles.btnFilledPurple}
            onClick={signInWithGoogle}
            icon={''}
          >
            sign in with Google
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
