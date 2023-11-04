import React, { useState } from 'react';
import '../styles/styles.css';

const SignUpForm = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const signedUp = onSignUp({ email, password });
    if (signedUp) {
      setMessage('Sign up successful');
    } else {
      setMessage('Email already exists');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
        <p className={message === 'Sign up successful' ? 'success' : 'error'}>
          {message}
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;

