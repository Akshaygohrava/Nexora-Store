"use client";
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

export default function Wishlist() {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchWishlist = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, `users/${user.uid}/wishlist`));
        setWishlist(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        setWishlist([]);
      }
      setLoading(false);
    };
    fetchWishlist();
  }, [user]);

  const removeFromWishlist = async (id) => {
    await deleteDoc(doc(db, `users/${user.uid}/wishlist`, id));
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
        {loading ? (
          <div>Loading...</div>
        ) : wishlist.length === 0 ? (
          <div>No items in wishlist.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlist.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <button onClick={() => removeFromWishlist(item.id)} className="mt-2 text-red-500">Remove</button>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
