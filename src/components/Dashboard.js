import React from 'react';
import './Dashboard.css';

const Dashboard = ({ users }) => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Admin Dashboard</h2>
      <div className="login-info">
        <h3>Login Information</h3>
        <p>Total Logins: {users.length}</p>
      </div>
      <div className="signup-info">
        <h3>Signup Information</h3>
        <p>Total Signups: {users.length}</p>
        <ul className="user-list">
          {users.map((user, index) => (
            <li className="user-item" key={index}>
              <span className="user-email">Email: {user.email}</span>
              <span className="user-password">Password: {user.password}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

