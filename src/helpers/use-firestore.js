import firebase from 'firebase/app';
import 'firebase/firestore';

// import 'firebase/analytics';
// const analytics = firebase.analytics();

export const useFirestore = () => {
  const db = firebase.firestore();
  const userColRef = db.collection('users');

  const addUserDoc = async (user) => {
    userColRef
      .add(user)
      .then((docRef) => {
        console.log(docRef.path);
        return docRef;
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const getUsers = () => {
    userColRef
      .get()
      .then((col) => {
        return col.docs;
        if (col.size > 0) {
          return col.docs;
        }
      })
      .catch((error) => {
        console.error('Error getting users: ', error);
      });
  };

  return {
    addUserDoc,
    getUsers,
  };
};
