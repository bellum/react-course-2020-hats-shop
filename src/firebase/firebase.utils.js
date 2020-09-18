import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyACv6zCZM8rSvdM3ERLl8eUmbD-qM1Ihk0",
        authDomain: "react-course-2020-hats-shop.firebaseapp.com",
    databaseURL: "https://react-course-2020-hats-shop.firebaseio.com",
    projectId: "react-course-2020-hats-shop",
    storageBucket: "react-course-2020-hats-shop.appspot.com",
    messagingSenderId: "760352537050",
    appId: "1:760352537050:web:731bc5ceb1959d0120e8e3",
    measurementId: "G-DMN386SFVD"
};

firebase.initializeApp(config);

// firebase.auth attached due to import above
export const auth = firebase.auth();
// firebase.firestore attached due to import above
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
   prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) {
        return;
    }
    // query reference does not contain any data but rather points to the place inside the database
    const userRef = firestore.doc(`users/${user.uid}`);
    const userSnapshot = await userRef.get();

    if (userSnapshot.exists) {
        return userRef;
    }

    const {displayName, email} = user;
    const createdAt = new Date();
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
        })
    } catch (err) {
        console.error('Exception happened on creating new user:', err.message);
    }
    return userRef;
};

export default firebase;
