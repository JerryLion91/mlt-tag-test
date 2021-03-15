import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Button from '../Button';

export default function SignInRegisterPage() {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };

  return (
    <>
      <header style={styles.header}>
        <img
          src={'logo.svg'}
          alt={''}
          style={{ height: '80vh', maxHeight: '150px' }}
        />
        <span style={{ fontSize: 'calc(25px + 2vmin)', margin: '10px' }}>
          M.L.T. Designs
        </span>
      </header>
      <div style={styles.divFlexColumn}>
        <span style={{ fontSize: 'calc(10px + 1.8vmin)', margin: '10px 0px' }}>
          Login
        </span>
        <span style={{ fontSize: 'calc(5px + 1.8vmin)', margin: '10px 0px' }}>
          Hi there! Nice to see you again
        </span>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="pwd">Password:</label>
        <input type="password" name="pwd" id="pwd" />
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
    </>
  );
}

const styles = {
  button: {
    margin: '30px 0px 0px 0px',
    padding: '12px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Asap , sans-serif',
    backgroundColor: '#882aa2',
    alignSelf: 'stretch',
  },
  header: {
    flex: '0 0 auto',
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#520369',
    fontFamily: "'Quicksand', sans-serif",
  },
  divFlexColumn: {
    minWidth: '150px',
    maxWidth: '350px',
    width: '70vw',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'calc(10px + 1.5vmin)',
  },
  divFlexRow: {
    minWidth: '270px',
    maxWidth: '520px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
};
