import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import AccountSettings from './components/AccountSettings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="mobile-frame">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/account" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;