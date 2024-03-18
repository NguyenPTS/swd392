import React from 'react';
import Signin from './components/LoginPage';
import Employee from './components/Employee';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeUpdate from './components/EmployeeUpdate';
import CheckingAttendance from './components/CheckingAttendance';
import Home from './components/Home';
import Admin from './components/Admin';
import Schedule from './components/Schedule'
import ShiftAdd from './components/ShiftAdd';
import ShiftAssign from './components/ShiftAssign';
import User from './components/User'
import UserAdd from './components/UserAdd';
import UserUpdate from './components/UserUpdate';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/checkingattendance' element={<CheckingAttendance />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employeeadd' element={<EmployeeAdd />} />
          <Route path='/employeeupdate' element={<EmployeeUpdate />} />
          <Route path='/home' element={<Home />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/shiftadd' element={<ShiftAdd />} />
          <Route path='/shiftassign' element={<ShiftAssign />} />
          <Route path='/user' element={<User />} />
          <Route path='/useradd' element={<UserAdd />} />
          <Route path='/userupdate' element={<UserUpdate />} />
          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );


  
}

export default App;
