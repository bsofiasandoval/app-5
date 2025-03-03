'use client'
import { useRandomUser } from '../hooks/getUser';
import Image from 'next/image';

export default function Home() {
  const { user, loading, error } = useRandomUser();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Random User</h1>
      {user && (
        <div className="flex flex-col items-center">
          <Image
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <p className="text-lg">
            {user.name.title} {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
          <p>{user.location.city}, {user.location.country}</p>
        </div>
      )}
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Fetch New User
      </button>
    </div>
  );
}