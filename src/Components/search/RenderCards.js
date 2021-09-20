import React, { Component } from "react";
import { Col, Card, Button, Popover, OverlayTrigger } from "react-bootstrap";
import "./Search.css";
export class RenderCards extends Component {
  popOver = () => {
    return (
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={
          <Popover id="popover-basic">
            <Popover.Header
              style={{
                backgroundColor: "red",
              }}
              as="h3"
            >
              wrong
            </Popover.Header>
            <Popover.Body
              style={{
                backgroundColor: "red",
              }}
            >
              Please <strong>LogIn</strong>
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
    );
  };
  render() {
    return this.props?.searchBooks?.map((item) => {
      return (
        <Col key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={
                item.image
                  ? item.image
                  : "https://eloquentjavascript.net/img/cover.jpg"
              }
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.categories || "No categories"}</Card.Text>
              <Card.Text>{item.authors || "No authors"}</Card.Text>
              <Card.Text style={{ overflowY: "scroll" }}>
                {/* {item.description || "No description"} */}
              </Card.Text>
              {this.props.isAuthenticated ? (
                <Button
                  className="submit"
                  onClick={() =>
                    this.props.addToFav({
                      ...item,
                      isFav: true,
                      email: this.props.email,
                    })
                  }
                  variant={"danger"}
                  disabled={item.isFav ? true : false}
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
              ) : (
                this.popOver()
              )}
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
}

export default RenderCards;
