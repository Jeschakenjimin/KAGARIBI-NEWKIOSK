// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz_69H0GEPWYkbLtB1wku1rtccGHrlScc",
  authDomain: "kagaribi-kiosk-web.firebaseapp.com",
  projectId: "kagaribi-kiosk-web",
  storageBucket: "kagaribi-kiosk-web.firebasestorage.app",
  messagingSenderId: "1096577138191",
  appId: "1:1096577138191:web:7ce4fa4bbeaa6e13f6ad7a",
  measurementId: "G-C3WN7GK9QM"
};

// Initialize Firebase globally using CDN Compat SDK
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();