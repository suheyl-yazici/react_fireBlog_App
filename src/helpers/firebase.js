import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC4xAqMLt1M88sbMABtFl8J0r5aWNfDnJA",
    authDomain: "fir-blog-app-39c90.firebaseapp.com",
    projectId: "fir-blog-app-39c90",
    storageBucket: "fir-blog-app-39c90.appspot.com",
    messagingSenderId: "280512556412",
    appId: "1:280512556412:web:a04461502ab015449b48f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email,password,navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        navigate("/")
        console.log(userCredential)
    } catch (error) {
        alert(error.message);
    }
}

export const signIn = async(email, password,navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
        console.log(userCredential)
    } catch (error) {
        alert(error.message);
    }
}