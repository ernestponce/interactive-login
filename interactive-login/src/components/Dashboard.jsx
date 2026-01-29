import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="card">
      <div style={{ fontSize: '40px', marginBottom: '10px' }}>🚀</div>
      <h1>Welcome Aboard!</h1>
      <h2>{user}</h2>
      
      {/* CHANGED: Message now refers to just "System" */}
      <p>You have successfully connected to the System.</p>
      
      <div style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
        <strong>Status:</strong> <span style={{ color: 'green' }}>● Active</span>
      </div>

      <button onClick={onLogout} className="btn-primary btn-logout">
        Disconnect / Logout
      </button>
    </div>
  );
};

export default Dashboard;