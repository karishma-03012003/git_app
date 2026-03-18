import './AccountSettings.css';

function AccountSettings() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

  const name = loggedInUser?.name || 'User';
  const email = loggedInUser?.email || '';

  return (
    <div className="account-container">
      <div className="account-header">
        <h2>Account Settings</h2>
      </div>
      <div className="account-body">
        <div className="profile-row">
          <div className="avatar-wrapper">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" />
            <div className="camera-icon">📷</div>
          </div>
          <div className="profile-info">
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>
        <p className="bio-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>
        <hr className="divider" />
      </div>
    </div>
  );
}

export default AccountSettings;