import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const isFormFilled = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (!isFormFilled) return;

    const enteredEmail = email.trim().toLowerCase();
    const enteredPassword = password.trim();

    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Find matching user
    const matchedUser = users.find(
      (u) => u.email === enteredEmail && u.password === enteredPassword
    );

    if (matchedUser) {
      // Save logged in user separately
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      setError('');
      navigate('/account');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Signin to your<br />PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          autoComplete="new-password"
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(''); }}
          autoComplete="new-password"
        />
      </div>

      {error && <p className="error-msg">{error}</p>}

      <button
        className={`btn-login ${isFormFilled ? 'active' : ''}`}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default LoginScreen;