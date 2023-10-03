// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
// import "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnyG8ZtKZo225Q6CeVUp-u8lGfPO4y4Hs",
    authDomain: "cinesphere-a7f41.firebaseapp.com",
    projectId: "cinesphere-a7f41",
    storageBucket: "cinesphere-a7f41.appspot.com",
    messagingSenderId: "959461472033",
    appId: "1:959461472033:web:2bd79f2c254a8f332fb060"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const movieRef =collection(db,"movies");
export const reviewRef=collection(db,'review')
export const userRef=collection(db,'users')



// getAuth().settings.appVerificationDisabledForTesting = true;

export default app;





