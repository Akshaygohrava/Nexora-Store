'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  // Load cart from Firestore or localStorage on mount/login
  useEffect(() => {
    const loadCart = async () => {
      if (user) {
        // Try to load from Firestore
        const cartRef = doc(db, `users/${user.uid}/cart`, 'cart');
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          setCartItems(cartSnap.data().items || []);
        } else {
          setCartItems([]);
        }
      } else {
        // Guest: load from localStorage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          try {
            setCartItems(JSON.parse(savedCart));
          } catch (error) {
            setCartItems([]);
          }
        } else {
          setCartItems([]);
        }
      }
    };
    loadCart();
    // eslint-disable-next-line
  }, [user]);

  // Save cart to Firestore or localStorage whenever it changes
  useEffect(() => {
    if (user) {
      const saveCart = async () => {
        const cartRef = doc(db, `users/${user.uid}/cart`, 'cart');
        await setDoc(cartRef, { items: cartItems });
      };
      saveCart();
    } else {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

