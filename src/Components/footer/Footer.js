import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import netlify from "./../../Assets/netlify-seeklogo.com.svg";
import heroku from "./../../Assets/heroku-seeklogo.com.svg";
export class Footer extends Component {
  render() {
    return (
      <div className="class--footer">
        <div class="container-fluid pb-0 mb-0 justify-content-center text-light row--0margin">
          <footer>
            <div class="row my-5 justify-content-center py-5">
              <div class="col-11">
                <div class="row row--0margin">
                  <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                    <h3 class="text-muted mb-md-0 mb-5 bold-text">
                      Reading Geeks.
                    </h3>
                  </div>
                  <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 class="mb-3 mb-lg-4 bold-text ">
                      <b>MENU</b>
                    </h6>
                    <ul class="list-unstyled">
                      <li>
                        {" "}
                        <Link to="/">Home Page</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to="/search">Search</Link>
                      </li>

                      <li>
                        {" "}
                        <Link to="/donate">Donate</Link>
                      </li>
                      <li>
                        {" "}
                        {this.props.auth0.isAuthenticated ? (
                          <Link to="/FavBook">MY Books</Link>
                        ) : (
                          console.log("Please Sign In")
                        )}
                      </li>
                      <li>
                        <Link to="/aboutUs">About Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                      <b>ADDRESS</b>
                    </h6>
                    <p class="mb-1">
                      Luminus Technical University College (LTUC)
                    </p>
                    <p>Airport Rd., Bridge</p>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                    <p class="social text-muted mb-0 pb-0 bold-text">
                      {" "}
                      <span class="mx-2">
                        <a
                          href={`https://github.com/orgs/Reading-Geeks/dashboard`}
                        >
                          <img
                            src="https://img.icons8.com/material-outlined/48/000000/github.png"
                            alt={"git"}
                            className="social--image"
                          />
                        </a>
                      </span>{" "}
                      <span class="mx-2 ">
                        <a href={`https://reading-geeks.netlify.app/`}>
                          <img
                            src={netlify}
                            alt={"git"}
                            className="social--image"
                          />
                        </a>
                      </span>{" "}
                      <span class="mx-2">
                        <a href={`https://reading-geeks.herokuapp.com/`}>
                          <img
                            src={heroku}
                            alt={"git"}
                            className="social--image"
                          />
                        </a>
                      </span>{" "}
                    </p>
                    <small class="rights">
                      <span>&#174;</span> Reading Geeks All Rights Reserved.
                    </small>
                  </div>
                  <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                    <h6 class="text-muted bold-text">
                      <b>Support Email</b>
                    </h6>
                    <small>readinggeeks301@gmail.com</small>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withAuth0(Footer);
