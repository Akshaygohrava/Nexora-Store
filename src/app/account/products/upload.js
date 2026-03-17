"use client";
import { useState } from 'react';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

export default function ProductUpload() {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError('');
    setSuccess('');
    try {
      let imageUrl = '';
      if (image) {
        const imageRef = ref(storage, `products/${user.uid}/${Date.now()}_${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }
      await addDoc(collection(db, 'products'), {
        name,
        description,
        imageUrl,
        userId: user.uid,
        createdAt: new Date()
      });
      setSuccess('Product uploaded!');
      setName('');
      setDescription('');
      setImage(null);
    } catch (err) {
      setError('Upload failed.');
    }
    setUploading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <h2 className="text-2xl font-bold mb-6">Upload Product</h2>
        <form onSubmit={handleUpload} className="bg-white rounded-lg shadow-md p-6 w-full max-w-md flex flex-col gap-4">
          <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 rounded" required />
          <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 rounded" required />
          <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} className="border p-2 rounded" />
          <button type="submit" disabled={uploading} className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">{uploading ? 'Uploading...' : 'Upload'}</button>
          {success && <div className="text-green-600">{success}</div>}
          {error && <div className="text-red-600">{error}</div>}
        </form>
      </main>
    </>
  );
}
