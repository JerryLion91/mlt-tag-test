import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ParentTagContructor from './components/Parents/ParentTagConstructor';
import ParentUser from './components/Parents/ParentUser';

import LoadingPage from './components/pages/LoadingPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

import { ProvideAuth } from './helpers/use-auth.js';
import { useAuth } from './helpers/use-auth.js';

import HomeContactForm from './components/pages/HomeContactForm';
import TagDisplay from './components/TagDisplay';

export default function App() {
  // Get auth state and re-render anytime it changes
  const auth = useAuth();

  // timer 1 seg to simulate loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProvideAuth>
      {loading ? (
        <LoadingPage />
      ) : (
        <Router>
          <Switch>
            <Route path="/login/register">
              {auth ? (
                <Redirect
                  to={{
                    pathname: '/',
                  }}
                />
              ) : (
                <RegisterPage />
              )}
            </Route>
            <Route path="/login">
              {auth ? (
                <Redirect
                  to={{
                    pathname: '/',
                  }}
                />
              ) : (
                <LoginPage />
              )}
            </Route>
            <Route path="/tag-constructor">
              <ParentTagContructor />
            </Route>
            <Route path="/contact-form">
              <HomeContactForm />
            </Route>
            <Route path="/user">
              <ParentUser />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      )}
    </ProvideAuth>
  );
}
