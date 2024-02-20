import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC1KYD8OKyVQEHnVM7AiYI8XVPfbEU1z3U',
  authDomain: 'final-project-firebase-644d3.firebaseapp.com',
  projectId: 'final-project-firebase-644d3',
  storageBucket: 'final-project-firebase-644d3.appspot.com',
  messagingSenderId: '8594843169',
  appId: '1:8594843169:web:256a38c7adb16d22852560',
  measurementId: 'G-7NH8D8T81L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;

    console.log(user);

    return user;
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
  return 'logout success';
};

export { auth, db, signInWithGoogle, logout };
