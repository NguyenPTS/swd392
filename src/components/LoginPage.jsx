import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials.username, credentials.password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <header className="w-full py-5 px-10 bg-neutral-800 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a
            className="hover:text-gray-300 text-white"
            onClick={() => window.location.reload()}
          >
            Store Attendance
          </a>
        </div>
        <nav>
          <button
            className="py-2 px-4 mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
            onClick={() => navigate('/checkingattendance')}>
            Attendance
          </button>
        </nav>
      </header>

      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-md w-full bg-white rounded shadow-xl p-10">
          <h2 className="text-2xl font-bold mb-10 text-gray-800 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-bold text-gray-500">Username</label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={credentials.username}
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={credentials.password}
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
