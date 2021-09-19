import React, { Component } from "react";
import { Col, Card, Button, Popover, OverlayTrigger } from "react-bootstrap";
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
                  onClick={() =>
                    this.props.addToFav({
                      ...item,
                      isFav: true,
                      email: this.props.email,
                    })
                  }
                  variant={item.isFav ? "danger" : "success"}
                  disabled={item.isFav ? true : false}
                >
                  Add To Favours{" "}
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
