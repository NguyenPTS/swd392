import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>

      <button
        className="border px-6 py-2 my-4"
        onClick={() => navigate('/checkingattendance')} // Navigate to "Checking attendance Page"
      >
        Check Attendance
      </button>

      <button
        className="border px-6 py-2 my-4"
        onClick={() => navigate('/employee')} // Navigate to "Employee Page"
      >
        Employee
      </button>

      <button
        className="border px-6 py-2 my-4"
        onClick={() => navigate('/home')} // Navigate to "Home Page"
      >
        Home
      </button>

      <button
        className="border px-6 py-2 my-4"
        onClick={() => navigate('/admin')} // Navigate to "Admin Page"
      >
        Admin
      </button>
    </div>
  );
};

export default Account;
