import firebaseApp from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCcIhSXRqoIsGvFobT5T75_RUbD_bbAMj8",
  authDomain: "tododatabase-a6ce2.firebaseapp.com",
  databaseURL: "https://tododatabase-a6ce2.firebaseio.com",
  projectId: "tododatabase-a6ce2",
  storageBucket: "tododatabase-a6ce2.appspot.com",
  messagingSenderId: "99219242207",
  appId: "1:99219242207:web:0422824d78550af9c8fd6a",
};
// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);

export default firebaseApp;
