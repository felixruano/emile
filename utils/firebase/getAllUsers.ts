import { db } from './firebaseClient';

export const getAllUsers = () => {
  const userRef = db.collection('users');
  return userRef.get().then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => {
      return {
        photoURL: doc.data().photoURL,
        displayName: doc.data().displayName,
      }
    })
  })
}