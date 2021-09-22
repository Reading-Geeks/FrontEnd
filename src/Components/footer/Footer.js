import React, { Component } from "react";
import "./Footer.css";
import { withAuth0 } from "@auth0/auth0-react";
import netlify from "./../../Assets/netlify-seeklogo.com.svg";
import heroku from "./../../Assets/heroku-seeklogo.com.svg";
export class Footer extends Component {
  render() {
    return (
      <footer className="footer--flex">
        <div className="ele ele--1">
          <h3 className="">Reading Geeks.</h3>
        </div>

        <div className="ele ele ele--2">
          <h6 className="">
            <b>ADDRESS</b>
          </h6>

          <p className="">Luminus Technical University College (LTUC)</p>
          <p>Airport Rd., Bridge</p>
        </div>
        <div className="ele ele ele--3">
          <h6 className="">
            <b>Support Email</b>
          </h6>
          <small>readinggeeks301@gmail.com</small>
        </div>
        <div className="ele ele ele--4">
          <div className="footer--icons">
            <p className="">
              {" "}
              <span className="">
                <a href={`https://github.com/orgs/Reading-Geeks/dashboard`}>
                  <img
                    src="https://img.icons8.com/material-outlined/48/000000/github.png"
                    alt={"git"}
                    className="social--image"
                  />
                </a>
              </span>{" "}
              <span className="">
                <a href={`https://reading-geeks.netlify.app/`}>
                  <img src={netlify} alt={"git"} className="social--image" />
                </a>
              </span>{" "}
              <span className="mx-2">
                <a href={`https://reading-geeks.herokuapp.com/`}>
                  <img src={heroku} alt={"git"} className="social--image" />
                </a>
              </span>{" "}
            </p>
          </div>
          <small className="">
            <span>&#174;</span> Reading Geeks All Rights Reserved.
          </small>
        </div>
      </footer>
    );
  }
}

export default withAuth0(Footer);
