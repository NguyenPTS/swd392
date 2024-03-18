import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const EmployeeAdd = () => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const videoRef = useRef(null);
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Add Employee';
        // Request access to webcam
        const getVideo = async () => {
            try {
                const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) videoRef.current.srcObject = videoStream;
            } catch (error) {
                console.error('Error accessing the webcam: ', error);
            }
        };
        getVideo();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out');
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log({ name, dateOfBirth, phoneNumber, address });
        // Assuming you have logic to capture and handle the photo
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
                        onClick={() => navigate('/employee')}                    >
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

            <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-20">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Add Employee</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        {/* Left Column for input fields */}
                        <div className="flex-1 space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            {/* Date of Birth */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Date of Birth</label>
                                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            {/* Phone Number */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Phone number</label>
                                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            {/* Address */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Address</label>
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>

                        {/* Right Column for video capture */}
                        <div className="flex-1 flex flex-col items-center mt-4 lg:mt-0">
                            <video ref={videoRef} className="w-64 h-48 rounded mb-4" autoPlay muted></video>
                            <button type="button"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => { /* Logic to capture photo */ }}>
                                Capture Photo
                            </button>
                        </div>
                    </div>
                    {/* Submit and Cancel buttons */}
                    <div className="flex justify-center space-x-4 mt-5">
                        <button type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Add
                        </button>
                        <button type="button" // or 'reset' if resetting the form
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => navigate('/') /* Replace with your logic for cancel action */}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeAdd;
