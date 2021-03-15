import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import TagContructorPage from './components/pages/TagConstructorPage';
import LoadingPage from './components/pages/LoadingPage';
import HomePage from './components/pages/HomePage';
import SignInRegisterPage from './components/pages/SignInRegisterPage';

import { ProvideAuth } from './helpers/use-auth.js';
import { useAuth } from './helpers/use-auth.js';
import UserProfilePage from './components/pages/UserProfilePage';
import UserPaymentsPage from './components/pages/UserPaymentsPage';
import UserAddressesPage from './components/pages/UserAddressesPage';
import UserOrdersPage from './components/pages/UserOrdersPage';
import TagSumaryPage from './components/pages/TagSumaryPage';

export default function App() {
  // Get auth state and re-render anytime it changes
  const auth = useAuth();

  // timer 1 seg to simulate loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
                <SignInRegisterPage />
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
                <SignInRegisterPage />
              )}
            </Route>
            <Route path="/tag-constructor/sumary">
              <TagSumaryPage />
            </Route>
            <Route path="/tag-constructor">
              <TagContructorPage />
            </Route>
            <Route path="/contact-form">{/* <Register /> */}</Route>
            <Route path="/user/payments">
              <UserPaymentsPage />
            </Route>
            <Route path="/user/addresses">
              <UserAddressesPage />
            </Route>
            <Route path="/user/orders">
              <UserOrdersPage />
            </Route>
            <Route path="/user">
              <UserProfilePage />
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
