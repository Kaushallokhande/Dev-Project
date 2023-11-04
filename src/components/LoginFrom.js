import React, { useState } from 'react';
import '../styles/styles.css';


const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedIn = onLogin({ email, password });
    if (loggedIn) {
      setMessage('Login successful');
    } else {
      setMessage('Invalid email or password');
    }
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p className={message === 'Login successful' ? 'success' : 'error'}>
          {message}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
