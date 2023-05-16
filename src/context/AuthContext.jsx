import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(null);

  // Your authentication logic goes here...
  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedAuthUser = localStorage.getItem('authUser');
    const savedToken = localStorage.getItem('token');

    if (savedAuthUser && savedToken) {
      setAuthUser(JSON.parse(savedAuthUser));
      setToken(savedToken);
    }
  }, []);

  // Save state to localStorage whenever authUser or token changes
  useEffect(() => {
    console.log(authUser, token);
      localStorage.setItem('authUser', JSON.stringify(authUser));
      localStorage.setItem('token', token);
 
  }, [authUser, token]);
  return (
    <AuthContext.Provider value={{ authUser, token, setAuthUser, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider