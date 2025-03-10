
import { useState, useEffect } from 'react';
import { User } from '../types/User';

export const useRandomUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        setUser(data.results[0]);
      } catch (err) {
        setError('Failed to fetch user');
        console.log(err);
        
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};
