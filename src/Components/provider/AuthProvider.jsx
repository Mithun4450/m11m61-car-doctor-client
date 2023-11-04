import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            const loggedUser = {email: currentUser?.email};
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser)
            setLoading(false)

            // if user exists then issue a token
            if(currentUser){
                
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true} )
                .then(res => {
                    console.log('token response', res.data)
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                })
            }
        })
        return () =>{
            return unsubscribe()
        }
    },[])
   

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut


    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;