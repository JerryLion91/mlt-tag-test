import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Button from '../Button';
import Footer from '../Footer';
import Input from '../Input';

export default function LoginPage() {
  const auth = useAuth();
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
      <header style={styles.header}>
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
        <span style={styles.heading1}>Login</span>
        <span style={styles.heading2}>Hi there! Nice to see you again</span>
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
        <Button style={styles.button} onClick={signInWithEmail} icon={''}>
          Login
        </Button>
        <div style={styles.divFlexRow}>
          <Button style={styles.forgotBtn} onClick={handleForgotPassword}>
            Forgot Password?
          </Button>
          <Button
            style={styles.registerBtn}
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
          <Button style={styles.button} onClick={signInWithGoogle} icon={''}>
            sign in with Google
          </Button>
        </div>
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
};
