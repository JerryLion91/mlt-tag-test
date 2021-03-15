import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Button from '../Button';
import Footer from '../Footer';
import Input from '../Input';

export default function SignInRegisterPage() {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };

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
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <Button
          style={styles.button}
          onClick={() => console.log('login clicked')}
          icon={''}
          text={'Login'}
        />
        <div style={styles.divFlexRow}>
          <Button
            onClick={() => console.log('fogeted clicked')}
            text={'Forgot Password?'}
          />
          <Button
            onClick={() => console.log('register clicked')}
            text={'Register'}
          />
        </div>
        <Button
          style={styles.button}
          onClick={() => auth.googleSignIn(() => history.push(from.pathname))}
          icon={''}
          text={'sign in with Google'}
        />
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
    margin: '25px 0px 0px 0px',
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
    fontWeight: 700,
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
    margin: '10px 0px',
  },
  divFlexColumn: {
    minWidth: '150px',
    maxWidth: '350px',
    width: '70vw',
    margin: '5vh auto',
    display: 'flex',
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
