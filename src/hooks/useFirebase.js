import initializeAuthentiCation from "../Firebase/firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentiCation()


const useFirebase = () => {

    
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    const googleSingIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
         
       
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false));
          
    }
    useEffect(() => {
        
     const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
            
              setUser(user)
             
            } else {
             setUser({})
            }
            setIsLoading(false)
          });

          return () => unsubscribed;

    }, [])

    return{
        user,
        error,
        isLoading,
        setError,
        logOut,
        googleSingIn, 
    }
}

export default useFirebase;