import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log(isAuthenticated);
    return (
      <div>
        {isAuthenticated ? <LogOut /> : <LogIn />}
        <Link to="/search">Search</Link>
      </div>
    );
  }
}
export default withAuth0(Header);
