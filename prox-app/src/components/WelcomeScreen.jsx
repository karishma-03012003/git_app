import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

function WelcomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className="btn-primary" onClick={() => navigate('/register')}>
          Create Account
        </button>
        <button className="btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;