import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/movies">VIDLY</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Routes/Rentals">Rentals</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Routes/Customers">Costumers</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/common/Login">Log In</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/common/Register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Products">Products</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </>
     );
}
 
export default NavBar;