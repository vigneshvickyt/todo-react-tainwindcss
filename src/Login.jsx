import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get all users from db.json (assuming signup array)
      const response = await axios.get('http://localhost:3000/signup');
      const users = response.data;
      // Find user with matching email and password
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        alert('Login successful!');
        navigate('/Home'); // Redirect to home page
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to login. Please try again.');
    }
  };

  return (
    <div>
      <div className='flex'>
        <div className='mt-30'>
          <img src="src/assets/login.webp" alt="Login" />
        </div>
        <div className='text-center ml-150 mt-30'>
          <header className='font-bold m-2'>Log in</header>
          <div className='font-light m-2'>Hello, Friend let go for ToDo list</div>
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
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter password'
              required
              className='w-full m-2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500'
            />
            <button
              type='submit'
              className='w-full m-2 bg-green-600 text-white font-semibold py-2 rounded-full hover:bg-green-700 transition-colors'
            >
              Login to ToDo
            </button>
          </form>
          <div><Link to={`/Forgetpassword`}>Forget Password</Link></div>
          <div className='font-semibold m-2'>
            Don't have an account?<Link to={`/Signup`}> Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
