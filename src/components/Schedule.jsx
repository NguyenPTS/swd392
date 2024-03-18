import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Schedule = () => {
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

    const shifts = [
        { id: 1, time: '8:00 - 11:00' },
        { id: 2, time: '11:00 - 14:00' },
        { id: 3, time: '14:00 - 17:00' },
        { id: 4, time: '17:00 - 20:00' },
    ];

    const shiftRows = shifts.map((shift) => (
        <tr key={shift.id}>
            <td className="p-1 sm:p-2 border-b border-gray-300">{`Shift ${shift.id}`}<br />{shift.time}</td>
            <td className="p-1 sm:p-2 border-b border-gray-300"></td>
            <td className="p-1 sm:p-2 border-b border-gray-300"></td>
            <td className="p-1 sm:p-2 border-b border-gray-300"></td>
            <td className="p-1 sm:p-2 border-b border-gray-300"></td>
            <td className="p-1 sm:p-2 border-b border-gray-300"></td>
            <td className="p-1 sm:p-2 border-b border-gray-300"></td>
            <td className="p-1 sm:p-2 border-b border-gray-300"></td>
        </tr>
    ));

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
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
            <main className="flex flex-col items-center p-5 sm:p-10 gap-5 sm:gap-10">
                <section className="flex flex-col items-center w-full max-w-6xl">
                    <div className="flex w-full justify-between items-center mb-3 sm:mb-6">
                        <div className="flex items-center">
                            <h2 className="text-xl sm:text-2xl font-semibold mr-2 sm:mr-4">Schedule</h2>
                            <input
                                type="date"
                                className="cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm p-1 sm:p-2"
                            />
                        </div>
                        <button 
                            className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                            onClick={() => navigate('/shiftadd')}>
                            Add<span className="ml-1 sm:ml-2">+</span>
                        </button>
                    </div>

                    <div className="bg-white p-3 sm:p-6 border border-gray-300 rounded-lg shadow-md w-full">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-1 sm:p-2 border-b border-gray-300">Shift</th>
                                    <th className="p-1 sm:p-2 border-b border-gray-300">Sunday</th>
                                    <th className="p-1 sm:p-2 border-b border-gray-300">Monday</th>
                                    <th className="p-1 sm:p-2 border-b border-gray-300">Tuesday</th>
                                    <th className="p-1 sm:p-2 border-b border-gray-300">Wednesday</th>
                                    <th className="p-1 sm:p-2 border-b border-gray-300">Thursday</th>
                                    <th className="p-1 sm:p-2 border-b border-gray-300">Friday</th>
                                    <th className="p-1 sm:p-2 border-b border-gray-300">Saturday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shiftRows}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Schedule;