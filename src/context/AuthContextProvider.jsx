import React, { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.warn("No user data found.");
            setUserData(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserData(null);
        }
      } else {
        setUserData(null);
      }

      setLoading(false); // ✅ moved to the end after all data is fetched
    });

    return () => unsub();
  }, []);

  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const dashboardData = {
      email: user.email,
      dashboardData: {
        projects: [],
        totalAmount: 0,
        status: "active",
        createdAt: new Date().toISOString(),
      },
    };

    await setDoc(doc(db, "users", user.uid), dashboardData);
    setUserData(dashboardData); // ✅ update userData immediately

    return userCredential;
  };

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data()); // ✅ update userData on login
    } else {
      setUserData(null);
    }

    return userCredential;
  };

  const logout = () => {
    return signOut(auth);
  };

  const showHidePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <authContext.Provider
      value={{
        user,
        userData,
        login,
        signup,
        logout,
        showPassword,
        setShowPassword,
        showHidePassword,
        loading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
