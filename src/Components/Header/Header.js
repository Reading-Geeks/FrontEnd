import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { withAuth0 } from "@auth0/auth0-react";
// import { Navbar } from 'rsuite';

class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    // console.log(isAuthenticated);
    return (
      <div>
        {isAuthenticated ? <LogOut /> : <LogIn />}
        <Link to="/">Home Page</Link>
        <Link to="/search">Search</Link>

        <Link to="/donate">Donate</Link>

        {isAuthenticated ? (
          <Link to="/FavBook">MY Books</Link>
        ) : (
          console.log("Please Sign In")
        )}
        <Link to="/abotus">About Us</Link>



      </div>
    );
  }
}
export default withAuth0(Header);
