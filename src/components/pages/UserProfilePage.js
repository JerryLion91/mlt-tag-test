import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import SettingsButton from '../SettingsButton';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
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

  const [userOldPwd, setUserOldPwd] = React.useState('');
  const handleUserOldPwdChange = (tipedOldPwd) => setUserOldPwd(tipedOldPwd);

  const [userNewPwd, setUserNewPwd] = React.useState('');
  const handleUserNewPwdChange = (tipedNewPwd) => setUserNewPwd(tipedNewPwd);

  const [userNewPwd2, setUserNewPwd2] = React.useState('');
  const handleUserNewPwdChange2 = (tipedNewPwd) => setUserNewPwd2(tipedNewPwd);

  const [pwdInput, setPwdInput] = React.useState(false);
  const handleUpdatePassword = () => setPwdInput(false);

  const handleForgotPassword = () => {
    setPwdInput(false);
    if (auth.user.emailVerified === false) {
      alert('EMAIL NOT VERIFIED');
    }
    auth.sendPasswordResetEmail(userEmail);
    alert('We will send you an email to change the password');
  };

  const goBack = () => {
    if (userName !== displayName) {
      console.log(displayName);
      alert('Confirm the name change first');
      return;
    }
    if (userEmail !== email) {
      alert('Confirm the email change first');
      return;
    }
    if (pwdInput) {
      alert('Confirm the password change first');
      return;
    }
    history.push(from);
  };

  const handleUpdateUserName = () => {
    auth.updateUserName(userName).then(() => {
      setUserName('');
      setUserName(auth.user.displayName);
    });
  };

  const handleUpdateEmail = () => {
    auth
      .updateUserEmail(userEmail)
      .then(() => {
        setUserEmail('');
        setUserEmail(auth.user.email);
      })
      .catch((error) => {
        if (error.code === 'auth/requires-recent-login') {
          alert(error.message + 'DEVELOPER IDEA: REDIRECT TO LOGIN PAGE');
        }
        if (error.com === 'auth/invalid-email') {
          alert(error.message);
        }
        console.log(error);
      });
    console.log('EmailUpdated');
  };
  return (
    <>
      <Header subtitle="My Profile">
        <SettingsButton />
        <Button onClick={goBack} icon={'navigate_before'} />
      </Header>
      <AppBody>
        {photoURL && (
          <img
            src={photoURL}
            style={{ borderRadius: '50%', height: '10vh', margin: '20px' }}
          />
        )}
        <div style={{ position: 'relative' }}>
          <Input
            type="text"
            label="Username"
            value={userName}
            onChange={handleUsernameChange}
          />
          {userName !== displayName ? (
            <Button
              style={{
                color: 'grey',
                fontSize: 'calc(15px + 1.5vmin)',
                position: 'absolute',
                right: '0',
                bottom: '0',
                margin: '0px 0px 35px 0px',
              }}
              onClick={handleUpdateUserName}
              icon={'sync'}
            />
          ) : (
            <i
              style={{
                width: '30px',
                color: 'grey',
                fontSize: 'calc(15px + 1.5vmin)',
                position: 'absolute',
                right: '0',
                bottom: '0',
                margin: '0px 0px 35px 0px',
              }}
              className="material-icons"
            >
              checked
            </i>
          )}
        </div>
        <div style={{ position: 'relative' }}>
          <Input
            type="email"
            label="Email"
            value={userEmail}
            onChange={handleUserEmailChange}
          />
          {userEmail !== email ? (
            <Button
              style={{
                color: 'grey',
                fontSize: 'calc(15px + 1.5vmin)',
                position: 'absolute',
                right: '0',
                bottom: '0',
                margin: '0px 0px 35px 0px',
              }}
              onClick={handleUpdateEmail}
              icon={'sync'}
            />
          ) : (
            <i
              style={{
                width: '30px',
                color: 'grey',
                fontSize: 'calc(15px + 1.5vmin)',
                position: 'absolute',
                right: '0',
                bottom: '0',
                margin: '0px 0px 35px 0px',
              }}
              className="material-icons"
            >
              checked
            </i>
          )}
        </div>
        {pwdInput ? (
          <div>
            <Input
              type="password"
              label="Current Password"
              value={userOldPwd}
              onChange={handleUserOldPwdChange}
            />
            <Input
              type="password"
              label="New Password"
              value={userNewPwd}
              onChange={handleUserNewPwdChange}
            />
            <Input
              type="password"
              label="Repeat the Password"
              value={userNewPwd2}
              onChange={handleUserNewPwdChange2}
            />
            <Button style={styles.button} onClick={handleUpdatePassword}>
              Update
            </Button>
            <Button style={styles.forgotBtn} onClick={handleForgotPassword}>
              Update password via email
            </Button>
          </div>
        ) : (
          <div>
            <Button style={styles.button} onClick={() => setPwdInput(true)}>
              Change my Password
            </Button>
          </div>
        )}
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
  forgotBtn: {
    color: '#882aa2',
    fontWeight: '500',
    fontFamily: 'Asap',
    margin: '25px 0px 25px 0px',
  },
};
