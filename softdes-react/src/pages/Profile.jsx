import React from 'react';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';

const Profile = () => {
  const handleProfileClick = (action) => {
    // Handle the profile box click action (e.g., Edit Profile, About, etc.)
    console.log(`Clicked on "${action}"`);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-content">
        <div className="avatar">
          {/* You can replace this with an actual user's avatar */}
          <div className="avatar-placeholder">Picture</div>
        </div>
        <div className="user-info">
          <h3>Krizelle Suyat</h3>
          <p>Balong143Krizelle@example.com</p>
        </div>
      </div>
      <div className="profile-box" onClick={() => handleProfileClick('Edit Profile')}>
        <div className="icon-text-container-profile">
          <AutoFixHighRoundedIcon />
          <span>Edit Profile</span>
        </div>
      </div>
      <h2 className="profile-heading">General Settings</h2>
      <div className="profile-box" onClick={() => handleProfileClick('About')}>
        <div className="icon-text-container-profile">
          <HelpRoundedIcon />
          <span>About</span>
        </div>
      </div>
      <div className="profile-box" onClick={() => handleProfileClick('Terms & Conditions')}>
        <div className="icon-text-container-profile">
          <ErrorRoundedIcon />
          <span>Terms & Conditions</span>
        </div>
      </div>
      <div className="profile-box" onClick={() => handleProfileClick('Terms & Conditions')}>
        <div className="icon-text-container-profile">
          <HttpsRoundedIcon />
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
