import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Aboutuspage extends Component {
  render() {
    console.log(this.props.email);
    return (
      <div class="wrapper">
        <div class="product-img">
          <img src={this.props.item.image} height="420" width="327" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{this.props.item.PersonName}</h1>
            <h2></h2>
            <p>{this.props.item.Description}</p>
          </div>
          <div class="product-price-btn">
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
    );
  }
}
export default Aboutuspage;
