import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./NavBar.css";

const NavBar = props => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <nav>
      <button id="burger" onClick={props.burgerClick}>
        <i className="fas fa-bars fa-lg"></i>
      </button>
      <div className="logo-wrapper">
        <img id="logo" src="/images/keep-logo.png" alt="image_not_found" />
        <span id="app-name">Keep</span>
      </div>
      <div style={{ flex: "1" }} />
      <div className="right-container">
        <button
          className="bttn-settings"
          onClick={() => setSettingsOpen(prev => !prev)}
        >
          <i className="fas fa-cog fa-lg"></i>
        </button>
        <div id="profile-pic" />
      </div>
      {settingsOpen && <SettingsDrop />}
    </nav>
  );
};

const SettingsDrop = props => {
  return ReactDOM.createPortal(
    <ul className="settings-drop">
      <li>Enable dark theme</li>
      <li>
        <a href="#">Send feedback</a>
      </li>
      <li>
        <a
          href="https://support.google.com/keep/#topic=6262468"
          target="_blank"
        >
          Help
        </a>
      </li>
    </ul>,
    document.getElementById("portal-settings-drop")
  );
};

export default NavBar;
