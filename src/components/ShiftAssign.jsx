import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ShiftAssign = () => {
    const [shiftNumber, setShiftNumber] = useState('');
    const [date, setDate] = useState('');
    const { logout } = useAuth();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle the submission
        console.log({ shiftNumber, date });
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

                    <button className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150" onClick={() => window.location.href = '/login'}>
                        Employee
                    </button>

                    <button
                        className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                        onClick={() => navigate('/schedule')}
                    >
                        Schedule
                    </button>

                    <button className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150" onClick={() => window.location.href = '/login'}>
                        User
                    </button>

                    <button
                        className="py-1 sm:py-2 px-2 sm:px-4 bg-red-500 hover:bg-red-700 text-white rounded transition ease-in-out duration-150"
                        onClick={handleLogout} >
                        Log Out
                    </button>
                </nav>
            </header>

            <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Add Shift</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="shiftNumber" className="block mb-2 text-sm font-medium text-gray-700">Shift No.</label>
                        <select
                            id="shiftNumber"
                            value={shiftNumber}
                            onChange={(e) => setShiftNumber(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option value="" disabled>--Please choose shift--</option>
                            <option value="1">Shift 1</option>
                            <option value="2">Shift 2</option>
                            <option value="3">Shift 3</option>
                            <option value="4">Shift 4</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-3"
                        >
                            Confirm
                        </button>
                        <button
                            type="button"
                            onClick={() => { } /* Replace with your cancel logic */}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShiftAssign;
