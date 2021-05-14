import firebase from 'firebase/app';
import 'firebase/firestore';

// import 'firebase/analytics';
// const analytics = firebase.analytics();

export const useFirestore = () => {
  const db = firebase.firestore();
  const userColectionRef = db.collection('users');
  const availabilityColectionRef = db.collection('availability');

  const addUserDoc = async (uid, userData) => {
    userColectionRef
      .doc(uid)
      .set(userData)
      .then((docRef) => {
        console.log('User Document successfully added!');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const updateUserDoc = async (uid, update) => {
    userColectionRef
      .doc(uid)
      .update(update)
      .then((docRef) => {
        console.log('User Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };

  const getUserAdresses = async (uid) => {
    const docRef = userColectionRef.doc(uid);
    let addresses = await docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const userDoc = doc.data();
          return userDoc.addresses;
        } else {
          // doc.data() will be undefined in this case
          console.log('User Document not found in the DataBank');
        }
      })
      .catch((error) => {
        console.error('Error getting address: ', error);
      });
    return addresses;
  };

  const updateUserAdresses = async (uid, newAddressArray) => {
    const docRef = userColectionRef.doc(uid);
    let updated = docRef
      .update({ addresses: newAddressArray })
      .then(() => {
        console.log('User Document Address successfully updated!');
        return newAddressArray;
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
    return updated;
  };

  const getUsers = () => {
    console.log('get Users: NOT DEVELOPED');
  };

  const getAvailability = async () => {
    const docRef = availabilityColectionRef.doc('standards');
    let standards = await docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log('Standards not found in the DataBank');
        }
      })
      .catch((error) => {
        console.error('Error getting document: ', error);
      });
    return standards;
  };

  return {
    addUserDoc,
    updateUserDoc,
    getUserAdresses,
    updateUserAdresses,
    // ==
    getUsers,
    getAvailability,
  };
};

// const thingsList = document.getElementById('thingsList');
// const createThing = document.getElementById('createThing');

// let thingsRef;
// let unsubscribe;

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     const { serverTimestamp } = firebase.firestore.FieldValue;
//     thingsRef = db.collection('things');
//     createThing.onclick = () => {
//       thingsRef.add({
//         uid: user.uid,
//         name: 'random name',
//         createdAt: serverTimestamp(),
//       });
//     };
//     unsubscribe = thingsRef
//       .where('uid', '==', user.uid)
//       .onSnapshot((querySnapshot) => {
//         const itens = querySnapshot.docs.map((doc) => {
//           return `<li>${doc.data().name}</li>`;
//         });
//         thingsList.innerHTML = itens.join('');
//       });
//   } else {
//     unsubscribe && unsubscribe();
//   }
// });
