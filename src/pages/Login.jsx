import React from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
  const { authUser, token, setAuthUser, setToken } = useAuth()
  
  // Get token 
  const login = async (credentials) => {
    return await axios.post('http://localhost:3000/api/auth/login', credentials);
  };

  const { mutate, isLoading, isError, isSuccess } = useMutation(login, {
    onSuccess: (res) => { setToken(res.data.token) },
  });

  // Get user Data
  const userFetcher = () => {
    return axios.get('http://localhost:3000/api/auth/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  const { data, isLoading2, isError2, isSuccess2 } = useQuery('user-data', userFetcher, {
    enabled: isSuccess,
    onSuccess: (res) => { setAuthUser(res.data.user) }
  })


  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    mutate({ email: email.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button type="submit" disabled={isLoading || isLoading2}>
        {isLoading || isLoading2 ? 'Logging in...' : 'Login'}
      </button>
      {isError || isError2 && <div>Error occurred while logging in.</div>}
    </form>
  );
};

export default LoginForm;
