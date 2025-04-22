"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for app directory

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Set to true after the component is mounted on the client
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/'); // Redirect on successful login
      } else {
        setError('Invalid credentials, please try again.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('An error occurred during login.');
    }
  };

  if (!isClient) {
    return null; // Return null until client-side rendering is confirmed
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">Login</h2>
      
      {error && (
        <div className="mb-4 text-red-500 text-center">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">Don&apos;t have an account? <a href="/auth/register" className="text-blue-600 hover:underline">Register here</a></p>
      </div>

      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600"><a href="/auth/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a></p>
      </div>
    </div>
  );
};

export default Login;
