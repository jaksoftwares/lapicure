"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ConfirmPassword = () => {
  const router = useRouter();
  const { token } = router.query; // Token from the reset password link

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError('Please enter and confirm your new password');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Replace with actual API call to confirm and reset the password
      const response = await fetch('/api/auth/confirm-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          newPassword,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Your password has been successfully reset.');
      } else {
        setError('Failed to reset the password. Please try again later.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('An error occurred while processing your request.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">Reset Your Password</h2>

      {message && (
        <div className="mb-4 text-green-500 text-center">{message}</div>
      )}

      {error && (
        <div className="mb-4 text-red-500 text-center">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-lg font-medium text-gray-700">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Enter your new password"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Confirm your new password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Reset Password
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Remembered your password?{' '}
          <a href="/auth/login" className="text-blue-600 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default ConfirmPassword;
