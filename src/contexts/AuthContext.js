import { createContext,useState,useEffect } from "react";
import app from "../helpers/firebase";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [currentUser, setCurrentUser] = useState()


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

 const createUser = async(email,password,navigate,displayName) => {
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

 const signIn = async(email, password,navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
        console.log(userCredential)
    } catch (error) {
        alert(error.message);
    }
}

 const logOut = () => {
    signOut(auth);
    alert("logOut success");
};

 const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setCurrentUser(currentUser)
        } else {
            setCurrentUser(false)
        }
      });
}

 const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    navigate("/");
  }).catch((error) => {
    console.log(error);
  });
}

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])

    return(
        <AuthContext.Provider value={{currentUser, createUser,signIn,logOut,userObserver,signUpProvider,signUpProvider}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;