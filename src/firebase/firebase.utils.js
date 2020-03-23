import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXb2M0D5wHEYDegVB0iGd-8nkUqOwXX6U",
    authDomain: "crwn-db-8f591.firebaseapp.com",
    databaseURL: "https://crwn-db-8f591.firebaseio.com",
    projectId: "crwn-db-8f591",
    storageBucket: "crwn-db-8f591.appspot.com",
    messagingSenderId: "637819770557",
    appId: "1:637819770557:web:cfeef43feaef70adb4c9d4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
