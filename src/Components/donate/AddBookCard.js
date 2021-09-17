import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap';


class AddBookCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.item.title}</Card.Title>
            <Card.Title>{this.props.item.description}</Card.Title>
            <Card.Title>{this.props.item.category}</Card.Title>
            <Card.Title>{this.props.item.author}</Card.Title>
            <Card.Title>{this.props.item.publishedDate}</Card.Title>

            {/* <Button variant="primary" onClick={()=>this.props.showUpdateForm(this.props.item)}> 📝 </Button> */}
            <Button variant="primary"> ⭐️ </Button>
            {/* <Button variant="primary"> 🗑️ </Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AddBookCard;
