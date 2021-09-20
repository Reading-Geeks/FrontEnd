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
            <Card.Title>{this.props.item.title}</Card.Title>
            <Card.Text>{this.props.item.description}</Card.Text>
            <Card.Text>{this.props.item.category}</Card.Text>
            <Card.Text>{this.props.item.author}</Card.Text>
            <Card.Img variant="top" src={this.props.item.image} />
            <Card.Text>{this.props.item.publishedDate}</Card.Text>

            {isAuthenticated && email === this.props.item.email ?  (
              <Button
              disabled={this.props.item.isFav ? true : false}
                variant="primary"
                onClick={() => this.props.showUpdateForm(this.props.item)}
              >
                {" "}
                📝{" "}
              </Button>
            ) : null}

            {isAuthenticated && email !== this.props.item.email ? (
              <Button
              
              disabled={this.props.item.isFav ? true : false}
                variant="primary"
                onClick={() => this.props.addDonateToFav(this.props.item)}
              >
                {" "}
                ⭐️{" "}
              </Button>
            ):null}

            {isAuthenticated &&  email === this.props.item.email ? (
              <Button
              disabled={this.props.item.isFav ? true : false}
                variant="primary"
                onClick={() => this.props.deleteBook(this.props.item._id)}
              >
                {" "}
                🗑️{" "}
              </Button>
            ) : null}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAuth0(AddBookCard);
