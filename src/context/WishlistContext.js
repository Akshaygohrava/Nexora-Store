"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) fetchWishlist();
    else setWishlist([]);
    // eslint-disable-next-line
  }, [user]);

  const fetchWishlist = async () => {
    setLoading(true);
    try {
      const q = collection(db, `users/${user.uid}/wishlist`);
      const querySnapshot = await getDocs(q);
      setWishlist(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (e) {
      setWishlist([]);
    }
    setLoading(false);
  };

  const addToWishlist = async (product) => {
    if (!user) return;
    // Prevent duplicate
    if (wishlist.some(item => item.productId === product.id)) return;
    await addDoc(collection(db, `users/${user.uid}/wishlist`), {
      productId: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice || null,
      rating: product.rating || null,
      badge: product.badge || null,
      createdAt: new Date()
    });
    fetchWishlist();
  };

  const removeFromWishlist = async (productId) => {
    if (!user) return;
    const q = query(collection(db, `users/${user.uid}/wishlist`), where('productId', '==', productId));
    const querySnapshot = await getDocs(q);
    for (const d of querySnapshot.docs) {
      await deleteDoc(doc(db, `users/${user.uid}/wishlist/${d.id}`));
    }
    fetchWishlist();
  };

  const isInWishlist = (productId) => wishlist.some(item => item.productId === productId);

  return (
    <WishlistContext.Provider value={{ wishlist, loading, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
