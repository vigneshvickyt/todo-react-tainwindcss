import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupImage from './assets/signup.webp'; // Assuming the image is in a folder named 'assets'

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if email already exists
      const check = await axios.get(`http://localhost:3000/signup?email=${formData.email}`);
      if (check.data.length > 0) {
        alert('Email already exists. Please use a different email.');
        return;
      }
      // If not, proceed to signup
      const response = await axios.post('http://localhost:3000/signup', formData);
      console.log('Account created successfully!', response.data);
      setFormData({
        email: '',
        username: '',
        password: ''
      });
      navigate('/Login');
    } catch (error) {
      console.error('There was an error creating the account!', error);
      alert('Failed to create account. Please try again.');
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen '>
      <div className='flex max-w-4xl p-8 bg-white   '>
        {/* Left side: Signup Form */}
        <div className='flex-1 flex flex-col justify-center items-center p-8'>
          <h1 className='text-3xl font-bold mb-4 text-green-600'>Sign up</h1>
          <p className='font-light mb-6 text-gray-600'>
            Hello, Friend! Let's get started with your ToDo list.
          </p>
          <form onSubmit={handleSubmit} className='w-full max-w-md'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter email'
              required
              className='w-full m-2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500'
            />
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Enter username'
              required
              className='w-full m-2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500'
            />
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter password'
              required
              className='w-full m-2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500'
            />

            <button
              type='submit'
              className='w-full m-2 bg-green-600 text-white font-semibold py-2 rounded-full hover:bg-green-700 transition-colors'
            >
              Create New Account
            </button>
          </form>
          <div className='mt-4 text-sm text-gray-600'>
            Already have an account?{' '}
            <Link to='/login' className='text-green-600 font-semibold hover:underline'>
              Login
            </Link>
          </div>
        </div>

        {/* Right side: Image */}
        <div className='hidden md:flex flex-1 justify-center items-center p-8'>
          <img
            src={signupImage}
            alt='People signing up'
            className='rounded-xl object-cover h-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;