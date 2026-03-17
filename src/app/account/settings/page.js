"use client";
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';

export default function AccountSettings() {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-2">Account Settings</h2>
          <p className="text-gray-600 mb-4">Update your profile and preferences here.</p>
          {/* Add form fields for updating user info, password, etc. */}
          <div className="text-gray-400">Coming soon...</div>
        </div>
      </main>
    </>
  );
}
