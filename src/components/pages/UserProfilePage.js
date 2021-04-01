import React from 'react';
import AppBody from '../AppBody';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import SettingsButton from '../SettingsButton';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';
import Input from '../Input';
import { useFirestore } from '../../helpers/use-firestore';

export default function ProfilePage() {
  let location = useLocation();
  let history = useHistory();
  const { userColectionRef } = useFirestore();

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
    // auth.sendPasswordResetEmail(userEmail);
    setPwdInput(false);
  };

  const goBack = () => {
    if (userName !== displayName) {
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

  React.useEffect(() => {
    let users = [];
    userColectionRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          users.push({ id: doc.id, ...doc.data() });
        });
        console.log(users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const clickHere = () => {};

  return (
    <>
      <Header subtitle="My Profile">
        <SettingsButton />
        <Button onClick={goBack} icon={'navigate_before'} />
      </Header>
      <AppBody>
        <img
          src={photoURL}
          style={{ borderRadius: '50%', height: '10vh', margin: '40px' }}
        />
        <div style={{ position: 'relative' }}>
          <Button
            style={{
              border: 'solid 1px black',
              fontSize: '20px',
            }}
            onClick={clickHere}
            icon={'trash'}
          >
            Click Here
          </Button>

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
              onClick={() => console.log('NameUpdated')}
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
              onClick={() => console.log('EmailUpdated')}
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
    color: '#7a7a7a',
    fontFamily: 'Asap',
    margin: '25px 0px 25px 0px',
  },
};
