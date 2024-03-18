import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Access the Vite environment variable
    withCredentials: true, // Important for cookies handling if your API uses cookies
  });

  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const response = await api.post('api/auth/login', { 
        id : username, 
        password: password
      });
  
      if (response.data.message === 'Login successfully') {
        setUser(response.data.data); // Assuming your response has a data object
  
        // Redirect to the admin page
        navigate('/admin');
      } else {
        // Handle login failure
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  const logout = async () => {
    try {
      await api.post('api/auth/logout');
      setUser(null); // Clear user state
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error
    }
  };

  const refreshToken = async () => {
    // Implement the refresh token logic here
  };

  const value = { user, login, logout, refreshToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Make sure to wrap your app or component tree with <AuthProvider> in your main entry file.
