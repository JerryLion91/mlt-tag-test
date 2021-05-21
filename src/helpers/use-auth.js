import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '../firebase';

// DataBank
import { useFirestore } from '../service/use-firestore';
import * as api from '../service/apiService';

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const firestore = useFirestore();

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signInWithGooglePopup = async (cb) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = response.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = response.user;
        // ...
        setUser(user);
        let users = [];
        firestore.userColectionRef
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              users.push(doc.data());
            });
            if (
              users.findIndex((element) => {
                return user.uid === element.uid;
              }) === -1
            ) {
              firestore.addUserDoc(user.uid, {
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                addresses: [
                  {
                    firstName: '',
                    lastName: '',
                    street: '',
                    country: '',
                    city: '',
                    postalCode: '',
                    saved: false,
                    detailed: true,
                  },
                ],
                phone: '',
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
        cb();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  };
  const signInWithEmailAndPassword = async (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signup = async (email, password, username) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        const user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            // Update successful.
          })
          .catch((error) => {
            // An error happened.
          });
        user
          .sendEmailVerification()
          .then(() => {
            // Email sent.
          })
          .catch((error) => {
            // An error happened.
            console.log(error.code);
            console.log(error.message);
          });
        return response.user;
      });
  };

  const signout = async (cb) => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
        cb();
      });
  };

  const updateUserName = async (uid, userName) => {
    return firebase
      .auth()
      .currentUser.updateProfile({
        displayName: userName,
      })
      .then(() => {
        setUser(firebase.auth().currentUser);
        firestore
          .updateUserDoc(uid, {
            displayName: userName,
          })
          .then(() => {
            // Email sent.
          })
          .catch((error) => {
            // An error happened.
            console.log(error.code);
            console.log(error.message);
          });
      });
  };

  const updateUserEmail = async (userEmail) => {
    return firebase
      .auth()
      .currentUser.updateEmail(userEmail)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            // Email sent.
          })
          .catch((error) => {
            // An error happened.
            console.log(error.code);
            console.log(error.message);
          });
        setUser(firebase.auth().currentUser);
      });
  };

  const sendPasswordResetEmail = async (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = async (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signInWithGooglePopup,
    signInWithEmailAndPassword,
    signup,
    signout,
    updateUserName,
    updateUserEmail,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
