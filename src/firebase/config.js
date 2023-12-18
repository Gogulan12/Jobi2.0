import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC36-t1R8kUmv6sNsVUIIeMFqWUTd62V-M",
  authDomain: "jobi-site.firebaseapp.com",
  databaseURL: "https://jobi-site-default-rtdb.firebaseio.com",
  projectId: "jobi-site",
  storageBucket: "jobi-site.appspot.com",
  messagingSenderId: "276033826605",
  appId: "1:276033826605:web:1b3bc78f2ecb50d995eda4",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
