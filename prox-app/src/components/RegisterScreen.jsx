import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterScreen.css';

function RegisterScreen() {
  const [isAgency, setIsAgency] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Get existing users list
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already registered
    const emailExists = existingUsers.find(
      (u) => u.email === formData.email.trim().toLowerCase()
    );

    if (emailExists) {
      setErrors({ email: 'Email already registered. Please login.' });
      return;
    }

    // Add new user to list
    const newUser = {
      name: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      isAgency,
    };

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    navigate('/login');
  };

  const fields = [
    { label: 'Full Name*', name: 'fullName', type: 'text', autoComplete: 'off' },
    { label: 'Phone number*', name: 'phone', type: 'tel', autoComplete: 'off' },
    { label: 'Email address*', name: 'email', type: 'email', autoComplete: 'off' },
    { label: 'Password*', name: 'password', type: 'password', autoComplete: 'new-password' },
    { label: 'Company name', name: 'company', type: 'text', autoComplete: 'off' },
  ];

  return (
    <div className="register-container">
      <h1>Create your<br />PopX account</h1>

      {fields.map((field) => (
        <div className="input-group" key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            placeholder="Enter here"
            value={formData[field.name]}
            onChange={handleChange}
            autoComplete={field.autoComplete}
          />
          {errors[field.name] && (
            <span className="error-msg">{errors[field.name]}</span>
          )}
        </div>
      ))}

      <div className="radio-group">
        <p>Are you an Agency?*</p>
        <label>
          <input type="radio" checked={isAgency} onChange={() => setIsAgency(true)} /> Yes
        </label>
        <label>
          <input type="radio" checked={!isAgency} onChange={() => setIsAgency(false)} /> No
        </label>
      </div>

      <button className="btn-create" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

export default RegisterScreen;