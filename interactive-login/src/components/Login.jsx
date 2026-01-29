import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '1234') {
      onLogin(username);
    } else {
      setError('⚠️ Access Denied: Invalid Credentials');
      setPassword(''); 
    }
  };

  return (
    <div className="card">
      <h2>SkyLine Analytics</h2>
      <p>Project Gatekeeper Access</p>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        
        <div className="input-group">
          {/* Controlled Component: Username  */}
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="input-group">
          {/* Controlled Component: Password  */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn-primary">
          Secure Login
        </button>

      </form>

      {/* Conditional Logic: Error Message  */}
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
};

export default Login;