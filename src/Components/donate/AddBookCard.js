import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

class AddBookCard extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    const email = user?.email;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={this.props.item.image} />
            <Card.Title>Title: {this.props.item.title}</Card.Title>
            <Card.Text>Description: {this.props.item.description}</Card.Text>
            <Card.Text>Category: {this.props.item.category}</Card.Text>
            <Card.Text>Author: {this.props.item.author}</Card.Text>
            <Card.Text> Published Date: {this.props.item.publishedDate}</Card.Text>

            {isAuthenticated && email === this.props.item.email ?  (
              <Button
              disabled={this.props.item.isFav ? true : false}
                variant="primary"
                onClick={() => this.props.showUpdateForm(this.props.item)}
              >
                {" "}
                📝{" "}
              </Button>
            ) : console.log('you can not edit')}

            {isAuthenticated && email !== this.props.item.email ? (
              <Button
              
              disabled={this.props.item.isFav ? true : false}
                variant="primary"
                onClick={() => this.props.addDonateToFav(this.props.item)}
              >
                {" "}
                ⭐️{" "}
              </Button>
            ): console.log('you can not edit')}

            {isAuthenticated &&  email === this.props.item.email ? (
              <Button
              disabled={this.props.item.isFav ? true : false}
                variant="primary"
                onClick={() => this.props.deleteBook(this.props.item._id)}
              >
                {" "}
                🗑️{" "}
              </Button>
            ) : console.log('you can not delete')}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAuth0(AddBookCard);
