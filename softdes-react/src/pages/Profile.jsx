import React from 'react';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import axiosClient from '../axios-client';
import { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate, Outlet, Link } from 'react-router-dom'

const Profile = () => {
  const {user, setUser } = useStateContext();

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-content">
        <div className="avatar">
          {}
          <div className="avatar-placeholder">Picture</div>
        </div>
        <div className="user-info">
          <h3 className='username-container'>{user.name}</h3>
        </div>
      </div>
      <Link to="/updateprofile">
      <div className="profile-box" onClick={() => handleProfileClick('Edit Profile')}>
        <div className="icon-text-container-profile">
          <AutoFixHighRoundedIcon />
          <span>Edit Profile</span>
        </div>
      </div>
      </Link>
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
