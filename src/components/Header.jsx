import React from "react";
import {Link, withRouter} from 'react-router-dom'
import { routes } from "../constants";

const Header = ({routes, location}) => {
    
    // console.log(props)
  return (
    <nav className="container-fluid d-flex align-items-center justify-content-between gelasio w-90">
      <Link to="/" className="logo w-25">Dhruv Mehta </Link>
      <ul className="menu-options d-flex justify-content-between w-50 list-unstyled">
        {routes.map(({name, path})=>(
            <li key={path}><Link className={path == location.pathname  ? "active" : ""} to={path} >{name}</Link></li>
        ))}
      </ul>
    </nav>
  );
}


export default withRouter(Header)
