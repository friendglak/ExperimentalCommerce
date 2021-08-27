import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAZJLOO0z_8BSIxc6SbVKODL786WZtkf6Q",
  authDomain: "ecommerce-experimental.firebaseapp.com",
  projectId: "ecommerce-experimental",
  storageBucket: "ecommerce-experimental.appspot.com",
  messagingSenderId: "2127414430",
  appId: "1:2127414430:web:b621fe056a19a802e2278f",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //Destructuro
  const { uid } = userAuth;

  //Accedo a la base de datos de firestore para comprobar que el usuario exista.
  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();
  const userRoles = ["user"];

  if (!snapshot.exits) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        ...additionalData,
      });
    } catch (error) {
      // console.log(error)
    }
  }
  return userRef;
};
