import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCoT3cCniFx8A_0ZJg_bBErCBaZzZZ2rk",
  authDomain: "a-mazon.firebaseapp.com",
  databaseURL: "https://a-mazon.firebaseio.com",
  projectId: "a-mazon",
  storageBucket: "a-mazon.appspot.com",
  messagingSenderId: "296869091408",
  appId: "1:296869091408:web:052ff07156ab395af85955",
  measurementId: "G-V0R8N4HBCK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export default auth;
