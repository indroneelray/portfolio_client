import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { routes } from "../constants";

const Header = ({ routes, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="gelasio fixed-top w-100">
        <div className="d-flex w-90 mx-auto align-items-center justify-content-between">
          <Link to="/" className="logo w-25">
            Dhruv Mehta{" "}
          </Link>
          <ul className="menu-options d-flex justify-content-between list-unstyled">
            {routes.map(({ name, path }) => (
              <li key={path}>
                <Link
                  className={path == location.pathname ? "active" : ""}
                  to={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </nav>

      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <ul className="list-unstyled">
          {routes.map(({ name, path }) => (
            <li key={path}>
              <Link
                className={path == location.pathname ? "active" : ""}
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default withRouter(Header);
