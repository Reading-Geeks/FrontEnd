import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
// import axios from "axios";
// import { withAuth0 } from "@auth0/auth0-react";
import Col from 'react-bootstrap/Col';
class Aboutuspage extends Component {
  render() {   console.log(this.props.email)
    return (
      <>

        <Col>
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
        </Col>
      </>
    )
  }
}
export default Aboutuspage;