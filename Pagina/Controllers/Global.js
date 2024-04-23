import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  FacebookAuthProvider     
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyCkHXF1AYKoFeV-ET6GIIf124vCyS7DqmI",
  authDomain: "pagina-web-3abf3.firebaseapp.com",
  projectId: "pagina-web-3abf3",
  storageBucket: "pagina-web-3abf3.appspot.com",
  messagingSenderId: "1051096980268",
  appId: "1:1051096980268:web:05cb03b318d4b59f40ea89",
  measurementId: "G-7RM5DRM13Y"
};

const providerface = new FacebookAuthProvider();
const providergoogle = new GoogleAuthProvider(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginvalidation = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout=()=>signOut(auth)

export const UserRegister = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const everification=()=>  
  sendEmailVerification(auth.currentUser)

export const resetPassword=()=>
  sendPasswordResetEmail(auth, email)

export function observador(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href = "../Index.html"
    }
  });
}

