import firebase from '../firebase';

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

/**
 *
 * POST   /users?uid=  Complete User
 * GET    /users/all
 * GET    /users?uid=
 * PUT    /users?uid= Field to Update
 * DELETE /users?uid=
 *
 * POST   /users/address?uid=
 * GET    /users/address?uid=
 * PUT    /users/address?uid=_&&index=
 * DELETE /users/address?uid=_&&index=
 *
 * POST   /orders
 * GET    /orders/all
 * GET    /orders?uid=
 * PUT    /orders?id=
 * DELETE /orders?id=
 *
 * GET /availability
 */
