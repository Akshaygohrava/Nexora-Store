'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { signIn, signUp, logout as firebaseLogout, onAuthChange, auth } from '@/lib/firebaseAuth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          email: firebaseUser.email,
          name: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          uid: firebaseUser.uid,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async (email, password) => {
    await signIn(email, password);
    // user state will be updated by onAuthChange
  };

  const handleSignUp = async (email, password) => {
    await signUp(email, password);
    // user state will be updated by onAuthChange
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    // user state will be updated by onAuthChange
  };

  const logout = async () => {
    await firebaseLogout();
    // user state will be updated by onAuthChange
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn: handleSignIn, signUp: handleSignUp, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
