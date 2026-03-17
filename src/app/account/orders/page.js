"use client";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

export default function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, `users/${user.uid}/orders`));
        setOrders(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        setOrders([]);
      }
      setLoading(false);
    };
    fetchOrders();
  }, [user]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <h2 className="text-2xl font-bold mb-6">My Orders</h2>
        {loading ? (
          <div>Loading...</div>
        ) : orders.length === 0 ? (
          <div>No orders found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg mb-2">Order #{order.id}</h3>
                <p className="text-gray-600">{order.status || 'No status'}</p>
                {/* Add more order details as needed */}
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
