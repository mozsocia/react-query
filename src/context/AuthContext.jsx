import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(null);

  // Your authentication logic goes here...

  return (
    <AuthContext.Provider value={{ authUser, token, setAuthUser, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider