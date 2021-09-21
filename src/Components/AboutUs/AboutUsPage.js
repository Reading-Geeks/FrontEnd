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
                    variant="primary"
                    onClick={() => this.props.showUpdateform(this.props.item)}
                  >
                    Update
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
