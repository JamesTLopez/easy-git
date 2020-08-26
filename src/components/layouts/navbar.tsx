import React from "react";
import { Link } from "react-router-dom";


const navbar: React.FC = () => {

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <h1>Easy-Git</h1>
        </div>
        <div className="nav-area">
          <nav>
            <ul>
              <li>
                <div className="search-form">
                  <form>
                    <input type="text" placeholder="Search.." />
                  </form>
                </div>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default navbar;
