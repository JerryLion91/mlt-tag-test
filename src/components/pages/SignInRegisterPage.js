import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../helpers/use-auth';

export default function SignInRegisterPage() {
  const auth = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };
  return (
    <>
      <button
        onClick={() => auth.googleSignIn(() => history.push(from.pathname))}
      >
        Sign in with Google
      </button>
    </>
  );
}
