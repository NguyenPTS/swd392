import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Admin = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Admin';
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out')
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Navigation Bar */}
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

                    <button
                        className="py-2 px-4 mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                        onClick={() => navigate('/employee')}
                    >
                        Employee
                    </button>

                    <button
                        className="py-2 px-4 mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                        onClick={() => navigate('/schedule')}
                    >
                        Schedule
                    </button>

                    <button
                        className="py-2 px-4 mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                        onClick={() => navigate('/user')}
                    >
                        User
                    </button>

                    <button
                        className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white rounded transition ease-in-out duration-150"
                        onClick={handleLogout} >
                        Log Out
                    </button>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center p-10 gap-10">
                {/* Statistics Section */}
                <section className="flex gap-10 w-full max-w-6xl">
                    <div className="flex-1 bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-2">Total Employees:</h2>
                        <p className="text-3xl font-bold">0</p>
                    </div>
                    <div className="flex-1 bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-2">Total Users:</h2>
                        <p className="text-3xl font-bold">1</p>
                    </div>
                    <div className="flex-1 bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-2">Attendance Rate:</h2>
                        <p className="text-3xl font-bold">0%</p>
                    </div>
                </section>

                {/* Recent Activities Section */}
                <section className="w-full max-w-6xl bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
                    {/* More content goes here */}
                </section>

                {/* Upcoming Shifts Section */}
                <section className="w-full max-w-6xl bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-2">Upcoming Shifts</h2>
                    {/* More content goes here */}
                </section>
            </main>
        </div>
    );
};

export default Admin;
