import React from "react";

const Settings = () => {
  return (
    <div className="settingsPage">
      <div className="Soptions">
        <h1 className="settingsHeading"> Settings </h1>
        
        <ul className="settingsUl">
            <li><a href="/User-delete">Delete Account</a></li>
            <li><a href="/User-update">Update/Change Username or Password</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;