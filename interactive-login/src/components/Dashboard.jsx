import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to SkyLine Analytics!</h1>
      <h2>Hello, {user}!</h2>
      <p>You have successfully logged into the system.</p>
      
      <button 
        onClick={onLogout}
        style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;