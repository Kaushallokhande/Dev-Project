import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginFrom';

const LoginPage = ({onLogin, users, setMessage, setLoggedInUser}) => {
  const history = useHistory(); // Initialize history

  const handleLogin = ({ email, password }) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user && user.isAdmin) {
      setMessage({ text: 'Login successful', type: 'success' });
      setLoggedInUser(user);

      history.push('/');

      return true;
    } else {
      setMessage({ text: 'Invalid email or password', type: 'error' });
      return false;
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;














// import React from 'react';
// import LoginForm from '../components/LoginFrom';


// const LoginPage = ({ onLogin }) => {
//   return (
    // <div>
    //   <h1>Login Page</h1>
    //   <LoginForm onLogin={onLogin} />
    // </div>
//   );
// };

// export default LoginPage;
