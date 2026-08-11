// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYPxqPLi99eU43pF4fcPFBM2HmCLaQOVs",
  authDomain: "kagaribi-kiosk-web-f8314.firebaseapp.com",
  projectId: "kagaribi-kiosk-web-f8314",
  storageBucket: "kagaribi-kiosk-web-f8314.firebasestorage.app",
  messagingSenderId: "771486373618",
  appId: "1:771486373618:web:a472ccf959be7b5f72e26b",
  measurementId: "G-B51M10XVML"
};

// Initialize Firebase globally using CDN Compat SDK
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();