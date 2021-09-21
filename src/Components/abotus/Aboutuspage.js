import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
// import axios from "axios";
// import { withAuth0 } from "@auth0/auth0-react";
import Col from 'react-bootstrap/Col';
import "./styleaboutus.css"

class Aboutuspage extends Component {
  render() {
    console.log(this.props.email)
    return ( <>

      {/* <h1>{this.props.item.status}</h1>
<div class="cards">
  <div class="card">
    <h2 class="card-title">{this.props.item.PersonName}</h2>
    <img src={this.props.item.image} alt=""  height='500'/>
    <p class="card-desc">{this.props.item.Description}</p>
    <p class="card-desc">{this.props.item.email}</p>
  </div>
  {(this.props.email === "readinggeeks301@gmail.com") ? <Button variant="primary" onClick={() => this.props.showUpdateform(this.props.item)}>Update</Button> : null }
</div> */}



      {/* <Col>
<div class="center">
  <div class="property-card">
    <a href="#">
     <div class="property-image">
        <div class="property-image-title">
      <img src={this.props.item.image} alt=""      height="400"   width="300"               />
      </div></div></a>
    <div class="property-description">
      <h5> {this.props.item.PersonName} </h5>
      <p>{this.props.item.Description}</p>
      <p>  {this.props.item.email}</p>
    </div>
   
      
      <div >
      {(this.props.email === "readinggeeks301@gmail.com") ? <Button variant="primary" onClick={() => this.props.showUpdateform(this.props.item)}>Update</Button> : null }
    
   
       </div>
  
  </div>
</div></Col> */}





















      <html lang="en">

        <head>
          <title>{this.props.item.PersonName}</title>

        </head>

        <body>
        <div class="wrapper">
          <div class="product-img">
            <img  src={this.props.item.image}  height="420" width="327" />
          </div>
          <div class="product-info">
            <div class="product-text">
              <h1>{this.props.item.PersonName}</h1>
              <h2></h2>
              <p>{this.props.item.Description}</p>
            </div>
            <div class="product-price-btn">
            {(this.props.email === "readinggeeks301@gmail.com") ? <Button variant="primary" onClick={() => this.props.showUpdateform(this.props.item)}>Update</Button> : null }
    
            </div>
          </div>
        </div>
        </body>
</html>


























        {/* <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>
                <h1>{this.props.item.PersonName}</h1>
                <img
                  className="d-block w-100"
                  src={this.props.item.image}
                  alt="First slide"
                  height='200'
                />
                <h3>{this.props.item.Description}</h3>
                <h3>{this.props.item.email}</h3>
              </Card.Text>
              
              {(this.props.email === "readinggeeks301@gmail.com") ? <Button variant="primary" onClick={() => this.props.showUpdateform(this.props.item)}>Update</Button> : null }
            </Card.Body>
            <Card.Header>{this.props.item.status}</Card.Header>
          </Card>
        </Col> */}





















      </>



      )
  }
}
      export default Aboutuspage;