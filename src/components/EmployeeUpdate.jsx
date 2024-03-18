import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const EmployeeUpdate = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'EmployeeUpdate';
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


            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold">Update Employee</h1>
                        <p className="text-gray-600 mb-5">Fill out the form below to update an employee.</p>
                    </div>
                    <div>
                        <form>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="dob" className="block mb-2 font-bold text-gray-600">Date of Birth</label>
                                <input type="date" name="dob" id="dob" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="phone" className="block mb-2 font-bold text-gray-600">Phone number</label>
                                <input type="tel" name="phone" id="phone" placeholder="0111111111" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="address" className="block mb-2 font-bold text-gray-600">Address</label>
                                <input type="text" name="address" id="address" placeholder="Enter your address" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none">Update</button>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    type="button"
                                    onClick={() => navigate('/employee')}
                                    className="w-full px-3 py-2 text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
                                >Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeUpdate;