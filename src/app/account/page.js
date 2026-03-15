"use client";
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';

export default function AccountPage() {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-lg">Loading...</div>
        </main>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-lg">You are not signed in.</div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          {user.photoURL && (
            <img src={user.photoURL} alt="Profile" className="mx-auto mb-4 w-24 h-24 rounded-full object-cover" />
          )}
          <h2 className="text-2xl font-bold mb-2">Welcome, {user.name || user.displayName || user.email}!</h2>
          <p className="text-gray-600 mb-4">Email: {user.email}</p>
          <button
            onClick={logout}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Sign Out
          </button>
        </div>
      </main>
    </>
  );
}

