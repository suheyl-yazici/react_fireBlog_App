import app from "../helpers/firebase";
import { createContext,useState,useEffect } from "react";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toastify from "../helpers/toastNotify";


export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [currentUser, setCurrentUser] = useState()


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

 const createUser = async(email,password,navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        navigate("/")
        toastify("Yeni kullanıcı girişi başarılı!");
        console.log(userCredential)
    } catch (error) {
        alert(error.message);
    }
}

 const signIn = async(email, password,navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        navigate("/");
        toastify("Giriş başarılı!");
        console.log(userCredential)
    } catch (error) {
        alert(error.message);
    }
}

 const logOut = () => {
    signOut(auth);
    toastify("Çıkış başarılı!");

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
    toastify("Giriş başarılı!");
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