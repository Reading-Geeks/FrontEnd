import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

class AddBookCard extends Component {
 
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    const email = user?.email;
    return (
      <Col>
      <div className="wrapper">
        <div className="product-img">
          <img src={this.props.item.image} height="420" width="327" />
        </div>
        <div className="product-info">

          <div className="product-text">
            <h1>Title: {this.props.item.title}</h1>
            <p>
              Description: {this.props.item.description}
              <br />
              Category: {this.props.item.category}
              <br />
              Author: {this.props.item.author}
              <br />
              Published Date: {this.props.item.publishedDate}
            </p>
          </div>


          <div className="product-price-btn">
            {isAuthenticated && email === this.props.item.email ? (
              <Button
                disabled={this.props.item.isFav ? true : false}
                className="updateBtn"
                variant="primary"
                onClick={() => this.props.showUpdateForm(this.props.item)}
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

            {isAuthenticated && email !== this.props.item.email ? (
              <Button
                disabled={this.props.item.isFav ? true : false}
                className="favoriteBtn"
                variant="primary"
                onClick={() => this.props.addDonateToFav(this.props.item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-bookmark-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                </svg>
                </Button>
            ) : null}

            {isAuthenticated && email === this.props.item.email ? (
              <Button
                disabled={this.props.item.isFav ? true : false}
                className="deleteBtn"
                variant="primary"
                onClick={() => this.props.deleteBook(this.props.item._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                </Button>
            ) : null}
          </div>
        </div>

        {/*
        <Card style={{ width: "18rem" }}>
          <Card.Body className="cardBody">
            <Card.Img variant="top" src={this.props.item.image} />
            <Card.Title>Title: {this.props.item.title}</Card.Title>
            <Card.Text>Description: {this.props.item.description}</Card.Text>
            <Card.Text>Category: {this.props.item.category}</Card.Text>
            <Card.Text>Author: {this.props.item.author}</Card.Text>
            <Card.Text>
              {" "}
              Published Date: {this.props.item.publishedDate}
            </Card.Text>

            {isAuthenticated && email === this.props.item.email ? (
              <Button
                disabled={this.props.item.isFav ? true : false}
                className="updateBtn"
                variant="primary"
                onClick={() => this.props.showUpdateForm(this.props.item)}
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

            {isAuthenticated && email !== this.props.item.email ? (
              <Button
                disabled={this.props.item.isFav ? true : false}
                className="favoriteBtn"
                variant="primary"
                onClick={() => this.props.addDonateToFav(this.props.item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-bookmark-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                </svg>
              </Button>
            ) : null}

            {isAuthenticated && email === this.props.item.email ? (
              <Button
                disabled={this.props.item.isFav ? true : false}
                className="deleteBtn"
                variant="primary"
                onClick={() => this.props.deleteBook(this.props.item._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </Button>
            ) : null}
          </Card.Body>
        </Card>
            */}
      </div>
      </Col>
    );
  }
}

export default withAuth0(AddBookCard);
