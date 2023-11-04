import React from 'react';
import Dashboard from '../components/Dashboard';

const AdminPage = ({ users }) => {
  return (
    <div>
      <h1>Admin Page</h1>
      <Dashboard users={users} />
    </div>
  );
};

export default AdminPage;

