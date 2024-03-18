import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      {/* Navigation Bar */}
      <header className="w-full py-5 px-10 bg-neutral-800 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/home" className="hover:text-gray-300">Store Attendance</a>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-grow">
        {/* Left side */}
        <div className="w-1/2 flex justify-center items-center bg-gray-900">
          <div className="p-10 space-y-4 flex flex-col items-center">
            <button 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate('/signin')}>
              Go to Login
            </button>
            <p>Login to use the manage features</p>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="p-10 space-y-4 flex flex-col items-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Go to Attendance
            </button>
            <p>Check-in/Check-out for this shift</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
