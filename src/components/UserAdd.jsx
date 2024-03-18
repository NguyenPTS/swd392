import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserAdd = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'User Add';
      }, []);
    
      const handleLogout = async () => {
        try {
          await logout();
          navigate('/');
          console.log('You are logged out')
        } catch (e) {
          console.log(e.message);
        }
      };

    const [userData, setUserData] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        isAdmin: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setUserData({ ...userData, isAdmin: e.target.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your submit logic here
        console.log(userData);
    };

    const handleCancel = () => {
        // Implement your cancel logic here
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <header className="w-full py-3 sm:py-5 px-5 sm:px-10 bg-neutral-800 flex justify-between items-center">
                <div className="text-xl sm:text-2xl font-bold">
                    <a href="/home" className="hover:text-gray-300 text-white">Store Attendance</a>
                </div>
                <nav>
                    <button
                        className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                        onClick={() => navigate('/checkingattendance')}>
                        Attendance
                    </button>

                    <button
                        className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                        onClick={() => navigate('/employee')}
                    >
                        Employee
                    </button>

                    <button
                        className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                        onClick={() => navigate('/schedule')}
                    >
                        Schedule
                    </button>

                    <button
                        className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                        onClick={() => navigate('/user')}
                    >
                        User
                    </button>

                    <button
                        className="py-1 sm:py-2 px-2 sm:px-4 bg-red-500 hover:bg-red-700 text-white rounded transition ease-in-out duration-150"
                        onClick={handleLogout} >
                        Log Out
                    </button>
                </nav>
            </header>
            <form className="w-full max-w-md bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-center mb-6">Add User</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                        ID
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="id"
                        type="text"
                        placeholder="Enter ID"
                        name="id"
                        onChange={handleInputChange}
                        value={userData.id}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={handleInputChange}
                        value={userData.password}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleInputChange}
                        value={userData.confirmPassword}
                    />
                </div>
                <div className="mb-6">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            checked={userData.isAdmin}
                            onChange={handleCheckboxChange}
                        />
                        <span className="ml-2 text-gray-700">Admin</span>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserAdd;
