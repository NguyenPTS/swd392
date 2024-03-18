import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const Employee = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    document.title = 'Employee';
  }, []);

  const handlePrevious = () => {
    setCurrentPage(current => Math.max(current - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(current => Math.min(current + 1, totalPages));
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  // Mock data for employee list
  const employees = [
    {},
    // Add more employee data here
  ];

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

          <button
            className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
            onClick={() => navigate('/user')}>
            User
          </button>

          <button
            className="py-1 sm:py-2 px-2 sm:px-4 bg-red-500 hover:bg-red-700 text-white rounded transition ease-in-out duration-150"
            onClick={handleLogout} >
            Log Out
          </button>
        </nav>
      </header>

      <div className="mt-10 w-full max-w-6xl px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Employee List</h1>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"

            onClick={() => navigate('/employeeadd')} >
            Add<span className="ml-2">+</span>
          </button>
        </div>
        <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="py-3 px-4 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">No.</th>
                <th className="py-3 px-4 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ID</th>
                <th className="py-3 px-4 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                <th className="py-3 px-4 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Phone</th>
                <th className="py-3 px-4 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Status</th>
                <th className="py-3 px-4 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Operation</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-grey-light">{employee.number}</td>
                  <td className="py-2 px-4 border-b border-grey-light">{employee.id}</td>
                  <td className="py-2 px-4 border-b border-grey-light">{employee.name}</td>
                  <td className="py-2 px-4 border-b border-grey-light">{employee.phone}</td>
                  <td className="py-2 px-4 border-b border-grey-light">
                    <span className={`inline-block w-3 h-3 mr-2 rounded-full ${employee.status ? 'bg-green-500' : 'bg-red-500'}`} />
                  </td>
                  <td className="py-2 px-4 border-b border-grey-light">
                    <button
                      className="py-1 sm:py-2 px-2 sm:px-4 mr-2 sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white rounded transition ease-in-out duration-150"
                      onClick={() => navigate('/employeeupdate')}
                    >
                      Edit
                    </button>
                    <button
                      className="py-1 sm:py-2 px-2 sm:px-4 bg-red-500 hover:bg-red-700 text-white rounded transition ease-in-out duration-150">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination or other controls */}
        </div>
        <div className="flex justify-between items-center my-4">
          <button
            className={`py-2 px-4 bg-gray-300 text-gray-800 rounded ${currentPage <= 1 ? 'cursor-not-allowed opacity-50' : ''
              }`}
            disabled={currentPage <= 1}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`py-2 px-4 bg-gray-300 text-gray-800 rounded ${currentPage >= totalPages ? 'cursor-not-allowed opacity-50' : ''
              }`}
            disabled={currentPage >= totalPages}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;