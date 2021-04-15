import firebase from 'firebase/app';
import 'firebase/firestore';

// import 'firebase/analytics';
// const analytics = firebase.analytics();

export const useFirestore = () => {
  const db = firebase.firestore();
  const userColectionRef = db.collection('users');

  const addUserDoc = async (user) => {
    userColectionRef
      .add(user)
      .then((docRef) => {
        // console.log(docRef.path);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const getUsers = () => {
    userColectionRef
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
    userColectionRef,
    addUserDoc,
    getUsers,
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
