import React, { useState, useEffect } from 'react';
import axiosClient from '../axios-client';
import { useHistory } from 'react-router-dom';

function EditProfile() {
  const history = useHistory(); // Initialize history
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axiosClient.get('/user/profile')
      .then(response => {
        const data = response.data;
        setName(data.name);
        setEmail(data.email);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    axiosClient.put('/user/profile', data)
      .then(response => {
        if (response.status === 200) {
          setSuccessMessage('Profile updated successfully.');
        } else {
          setErrorMessage('Failed to update profile. Please check your input.');
        }
      })
      .catch(error => {
        setErrorMessage('An error occurred while updating the profile.');
        console.error('Error updating profile:', error);
      });
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">New Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' onClick={handleGoBack}>Back</button>
        <button className='btn btn-block'>Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
