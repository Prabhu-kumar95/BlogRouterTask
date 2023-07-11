import React from "react";
import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <div className="main-nav">
      <div className="logoarea">
        <img
          className="logo"
          src="https://d2lk14jtvqry1q.cloudfront.net/media/small_GUVI_1_c02a18fad7.png"
          alt="..."
        ></img>
      </div>

      <div className="menu-link mobile-menu-link">
        <ul>
          <li>
            <Link to="/">
              <h5>
                <b>ALL</b>
              </h5>
            </Link>
          </li>
          <li>
            <Link to="/FullStack">
              <h5>
                <b>FULL STACK DEVELOPEMENT</b>
              </h5>
            </Link>
          </li>
          <li>
            <Link to="/DataScience">
              <h5>
                <b>DATA SCIENCE</b>
              </h5>
            </Link>
          </li>
          <li>
            <Link to="/CyberSecurity">
              <h5>
                <b>CYBER SECURITY</b>
              </h5>
            </Link>
          </li>
          <li>
            <Link to="/Career">
              <h5>
                <b>CAREER</b>
              </h5>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavMenu;
