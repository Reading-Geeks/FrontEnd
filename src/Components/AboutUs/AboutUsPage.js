import React, { Component } from "react";
import { Button, Col } from "react-bootstrap";
import "./AboutUsPage.css";

class AboutUsPage extends Component {
  render() {
    console.log(this.props.email);
    return (
      <Col className="col-3A">
        <div className="wrapperA">
          <div className="product-imgA">
            <img src={this.props.item.image} height="420" width="327" />
          </div>
          <div className="product-infoA">
            <div className="product-textA">
              <h1>{this.props.item.PersonName}</h1>
              <h2></h2>
              <p>{this.props.item.Description}</p>
              <div className="product-price-btnA">
                {this.props.email === "readinggeeks301@gmail.com" ? (
                  <Button
                    className="product-price-btnf"
                    variant="primary"
                    onClick={() => this.props.showUpdateform(this.props.item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}
export default AboutUsPage;
