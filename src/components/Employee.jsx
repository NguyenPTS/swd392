import React, { useState } from 'react';
import axios from 'axios';

const apiPaths = {
  Base: '/api',
  Employees: {
    Base: '/employees',
    CRUD: '/', 
  },
};

const EmployeeComponent = () => {

  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [file, setFile] = useState(null);

  const getEmployee = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}${apiPaths.Employees.Base}`, {
        params: { id: employeeId }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addEmployee = async () => {
    const formData = new FormData();
    formData.append('name', employeeName);
    formData.append('file', file);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}${apiPaths.Employees.Base}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmployee = async () => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}${apiPaths.Employees.Base}/${employeeId}`, {
        name: employeeName,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmployee = async () => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}${apiPaths.Employees.Base}/${employeeId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Employee ID"
      />
      <input
        type="text"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        placeholder="Employee Name"
      />
      <input
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={getEmployee}>Get Employee</button>
      <button onClick={addEmployee}>Add Employee</button>
      <button onClick={updateEmployee}>Update Employee</button>
      <button onClick={deleteEmployee}>Delete Employee</button>
    </div>
  );
};

export default EmployeeComponent;
