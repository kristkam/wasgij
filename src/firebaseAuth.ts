import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "./firebaseConfig";

const auth = getAuth(firebaseApp);
const email = "";
const password = "";

signInWithEmailAndPassword(auth, email, password)
  .then(userCredentials => {
    // a user is signed in
    const user = userCredentials.user;
    console.log('user', user)
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage)
  });


