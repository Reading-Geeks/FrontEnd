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
            <Card.Title>{this.props.item.description}</Card.Title>
            <Card.Title>{this.props.item.category}</Card.Title>
            <Card.Title>{this.props.item.author}</Card.Title>
            <Card.Title>{this.props.item.publishedDate}</Card.Title>

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
