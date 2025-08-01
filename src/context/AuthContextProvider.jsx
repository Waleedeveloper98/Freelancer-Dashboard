import React, { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
      }
      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log("🔥 User data loaded:", userData);
      } else {
        console.log("❌ No user data found");
      }
    });
    return () => unsub();
  }, []);

  // Sign up function
  const signup = async (email, password) => {
    const userCredntial = createUserWithEmailAndPassword(auth, email, password);
    const user = userCredntial.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date().toISOString(),
      dashboardData: {
        projects: [],
        totalSpent: 0,
        status: "active",
      },
    });
    return userCredntial;
  };

  // Login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout function
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
