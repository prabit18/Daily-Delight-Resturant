import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = (props) => {


  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{fontFamily:' "Merriweather", serif'}}>
      <a className="nav-link" >
        Daily Delight<span className="sr-only"></span>
      </a>
      <Link className="navbar-brand mx-auto">
        
      </Link>
      <Link className="btn btn-primary mx-4" to="/aboutus" role="button">
        About Us
      </Link>
      <Link className="btn btn-primary mx-1" to="/contactus" role="button">
        Book Table
      </Link>
      <Link className="btn btn-primary mx-4" to="/cart">
        Cart
        {props.Count}
      </Link>
      <Link className="btn btn-primary mx-1" to="/login" role="button">
        Sign Out
      </Link>
    </nav>
  );
};

export default Navbar2;
