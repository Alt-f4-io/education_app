import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, SetCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [user] = useAuthState(auth)

    
    function signup(email, password, name) {
        const authentication = auth.createUserWithEmailAndPassword(email, password).then((userCredential)=>{userCredential.user.sendEmailVerification()})
        const database = db.collection('users').doc(user.uid).set({
            email: email,
            name: name
        },
        { merge: true}
        )        
        return { authentication, database }
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function googleLogin(){

    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            SetCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        googleLogin
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
