import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6ZOkWebfH1Qptc1igjgUa49oSFPCeIXc",
  authDomain: "helppo-19433.firebaseapp.com",
  projectId: "helppo-19433",
  storageBucket: "helppo-19433.appspot.com",
  messagingSenderId: "602015290779",
  appId: "1:602015290779:web:8e1fb5e3e7c55702307d3e",
  measurementId: "G-3360LTXNPV"
};
if(firebase.app.length == 0){
 firebase = initializeApp(firebaseConfig);
}


export default firebase;