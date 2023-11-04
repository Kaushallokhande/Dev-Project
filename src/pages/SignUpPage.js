import React, { useState } from 'react';
import SignUpForm from '../components/SignUpFrom';
import { useHistory } from 'react-router-dom';

const SignUpPage = ({ onSignUp, setMessage, setLoggedInUser }) => {
  const [users, setUsers] = useState([]);
  const history = useHistory(); 

  const handleSignUp = ({ email, password }) => {
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      setMessage({ text: 'Email already exists', type: 'error' });
      return false;
    }
    setUsers([...users, { email, password, isAdmin: false }]);
    setMessage({ text: 'Sign up successful', type: 'success' });
    setLoggedInUser({ email, password, isAdmin: false });
  
    history.push('/');
  
    return true;
  };
  
  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUpForm onSignUp={handleSignUp} />
    </div>
  );
};

export default SignUpPage;

