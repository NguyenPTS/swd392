import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CheckingAttendance = () => {
  const [checkinResponse, setCheckinResponse] = useState(null);
  const [checkoutResponse, setCheckoutResponse] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null); // Ref for the video element

  useEffect(() => {
    // Request access to webcam
    const getVideo = async () => {
      try {
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = videoStream;
      } catch (error) {
        console.error('Error accessing the webcam: ', error);
        setError('Error accessing the webcam');
      }
    };

    getVideo();
  }, []); // Empty dependency array means this effect runs once on mount

  // const handleImageSelect = (event) => {
  //   setImageFile(event.target.files[0]);
  //   // Reset responses and error messages when a new image is selected
  //   setCheckinResponse(null);
  //   setCheckoutResponse(null);
  //   setError(null);
  // };

  // const handleCheckIn = async () => {
  //   if (!imageFile) {
  //     setError('Please select an image');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('file', imageFile);

  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_API_URL}/attendance/check-in`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     setCheckinResponse(response.data);
  //     setImageFile(null); // Clear image selection after successful check-in
  //   } catch (error) {
  //     setError(error.response?.data?.message || 'Check-in failed');
  //   }
  // };

  // const handleCheckout = async () => {
  //   if (!imageFile) {
  //     setError('Please select an image');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('file', imageFile);

  //   try {
  //     const response = await axios.put(`${process.env.REACT_APP_API_URL}/attendance/check-out`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     setCheckoutResponse(response.data);
  //     setImageFile(null); // Clear image selection after successful check-out
  //   } catch (error) {
  //     setError(error.response?.data?.message || 'Check-out failed');
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center m-0" >
      <header className="w-full py-8 px-10 bg-neutral-800 text-white flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/home" className="hover:text-gray-300">Store Attendance</a>
        </div>
        <nav>
          <button className="py-2 px-4 w-32 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150" onClick={() => window.location.href = '/login'}>
            Login
          </button>
        </nav>
      </header>
      <div className="max-w-md mx-auto text-center m-10">
        <h1 className="text-4xl font-bold mb-10">Attendance</h1>
        {/* <input type="file" onChange={handleImageSelect} className="mb-4" /> */}
        <div className="mb-4">
          <video ref={videoRef} className="w-full max-w-lg h-auto rounded mb-4" autoPlay muted></video>
        </div>
        <div className="mt-10">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
            Check In
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Check Out
          </button>
          <p className="text-gray-600 mt-4">Ấn nút để check-in/check-out</p>
        </div>
        {checkinResponse && <p className="text-green-600">{checkinResponse.message}</p>}
        {checkoutResponse && <p className="text-green-600">{checkoutResponse.message}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default CheckingAttendance;
