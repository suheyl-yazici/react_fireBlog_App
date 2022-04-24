import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email,password,navigate,displayName) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
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

export const logOut = () => {
    signOut(auth);
    alert("logOut success");
};

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setCurrentUser(currentUser)
        } else {
            setCurrentUser(false)
        }
      });
}

export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    navigate("/");
  }).catch((error) => {
    console.log(error);
  });
}

export default app;