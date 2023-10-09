import React from "react";

const search = document.getElementById("input");

const Navbar = (props) => {
  return (
    <>
      <div>
        <nav className="nav">
          <a href="/">
            <div className="logobox">
              <div className="logo">
                <img src="" alt="" />
              </div>
            </div>
          </a>

          <ul className="links" id="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/sign-up">Sign Up</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            
          </ul>

            <div className="settings">
              <a href="/settings">
                <i className="fa fa-gear">
                  <label className="settingsLabel">Settings</label>
                </i>
              </a>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
