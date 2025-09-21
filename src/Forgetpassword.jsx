import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Forgetpassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Find user by email
      const response = await axios.get(`http://localhost:3000/signup?email=${email}`);
      if (response.data.length === 0) {
        alert('Email not found.');
        return;
      }
      const user = response.data[0];
      // Update password
      await axios.patch(`http://localhost:3000/signup/${user.id}`, { password: newPassword });
      alert('Password updated successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Failed to update password. Please try again.');
    }
  };

  return (
    <div>
      <div className='flex justify-center'>
        <div className='mt-50'>
          <header className='text-center'>Forget Password</header>
          <form className='w-full max-w-md' onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter email'
              required
              className='w-full m-2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500'
            />
            <input
              type='password'
              name='password'
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder='Enter new password'
              required
              className='w-full m-2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500'
            />
            <button
              type='submit'
              className='w-full m-2 bg-green-600 text-white font-semibold py-2 rounded-full hover:bg-green-700 transition-colors'
            >
              Update Password
            </button>
          </form>
          <div className='mt-4'>
            <Link to='/login' className='text-green-600 font-semibold hover:underline'>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpassword;
