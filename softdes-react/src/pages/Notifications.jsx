import React from 'react';

const Notification = ({ bookTitle, daysDue, onDismiss }) => {
  return (
    <div className="notification-container">
      <h2 className="notification-heading">Notification</h2>
      <div className="notification-box">
        <p>{bookTitle} is due in {daysDue} days.</p>
        <button className="btn btn-dismiss" onClick={onDismiss}>Dismiss</button>
      </div>
    </div>
  );
};

export default Notification;
