import React, { Component } from "react";
import { Card, Button  } from "react-bootstrap";
// import axios from "axios";
// import { withAuth0 } from "@auth0/auth0-react";
import Col from 'react-bootstrap/Col';


class Aboutuspage extends Component {




  render() {
    return (

      <>
{/* <div>
        <Card className="text-center">
          <Card.Header>Our Vision </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        
        </Card>
        </div>


        <div>


        <Card className="text-center">
          <Card.Header>Our Misssion </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        


        </div> */}


        <Col>
            <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Text>
            <h1>{this.props.item.PersonName}</h1>
            {/* <h3>{this.props.item.image}</h3> */}




            <img
                                    className="d-block w-100"
                                    src={this.props.item.image}
                                    alt="First slide"
                                    height='200'
                                />





            
            <h3>{this.props.item.Description}</h3>
            <h3>{this.props.item.email}</h3>
            </Card.Text>
           
            {/* <Button variant="primary" onClick={() => this.props.showUbdateForm(this.props.item)}>Update</Button> */}
            </Card.Body>
            <Card.Header>{this.props.item.status}</Card.Header>
          
      </Card>
      </Col>


  


      </>

    )
  }
}


export default Aboutuspage;
