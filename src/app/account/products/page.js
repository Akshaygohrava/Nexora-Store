"use client";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

export default function UserProducts() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const userProducts = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(product => product.userId === user.uid);
        setProducts(userProducts);
      } catch (err) {
        setProducts([]);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [user]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <h2 className="text-2xl font-bold mb-6">My Products</h2>
        {loading ? (
          <div>Loading...</div>
        ) : products.length === 0 ? (
          <div>No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                {product.imageUrl && (
                  <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
                )}
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
