import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./../Firebase/Firebase.conf";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  // console.log(loading, user);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth)
      
  };

  const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updatedProfile = (updateData) =>{
    return  updateProfile(auth.currentUser, updateData)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading, 
    setLoading,
    updatedProfile
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
