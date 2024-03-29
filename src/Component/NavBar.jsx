import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Amir's News App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/general" ? "active" : ""
                }`}
                aria-current="page"
                to="/general"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/business" ? "active" : ""
                }`}
                aria-current="page"
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/entertainment" ? "active" : ""
                }`}
                aria-current="page"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/general"
                >
                  General
                </Link> */}
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${
                  location.pathname === "/health" ? "active" : ""
                }`}
                aria-current="page"
                to="/health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${
                  location.pathname === "/science" ? "active" : ""
                }`}
                aria-current="page"
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${
                  location.pathname === "/sports" ? "active" : ""
                }`}
                aria-current="page"
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${
                  location.pathname === "/technology" ? "active" : ""
                }`}
                aria-current="page"
                to="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
