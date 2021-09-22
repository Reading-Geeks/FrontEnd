import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { withAuth0 } from "@auth0/auth0-react";
// import logo from "./../../Assets/Reading Geeks.gif";
import logo from "./../../Assets/sad sad sad sad sad i dont like the header.png";
import "./Header.css";

class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="nav">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <h1>
            Reading<span>Geeks</span>
          </h1>
        </div>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>

        <Link to="/donate">Donate</Link>

        {isAuthenticated ? (
          <Link to="/FavBook">My Books</Link>
        ) : (
          console.log("Please Sign In")
        )}
        <Link to="/aboutUs">About Us</Link>
        {isAuthenticated ? (
          <LogOut className="log-in-out" />
        ) : (
          <LogIn className="log-in-out" />
        )}
      </div>
    );
  }
}
export default withAuth0(Header);
