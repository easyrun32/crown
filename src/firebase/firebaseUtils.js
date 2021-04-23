// This is comment
// This is comment
// This is comment
// This is commentThis is comment
// This is comment
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR5qg8OpXNLYO7NTGH7zpTxi-4ngByNjQ",
  authDomain: "crown-copy.firebaseapp.com",
  projectId: "crown-copy",
  storageBucket: "crown-copy.appspot.com",
  messagingSenderId: "721399315331",
  appId: "1:721399315331:web:b7fd9f4e435287b28954b6",
  measurementId: "G-RTHVR0E0VL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the users" + error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
