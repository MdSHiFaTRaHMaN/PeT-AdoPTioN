import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password, displayName) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName);
       
    }
   
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const [userInfo, setUserInfo] = useState(null);
    const provider = new GoogleAuthProvider();  

        const handleGoogle = () =>{
            signInWithPopup(auth,provider)
            .then(result => {
                const user = result.user;
                setUserInfo(user);
                {
                    user && '/'
                }
              })
              .catch(error =>{
                console.log('error', error.message);
              })
        }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('user create', currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        handleGoogle,
        updateUserProfile
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;