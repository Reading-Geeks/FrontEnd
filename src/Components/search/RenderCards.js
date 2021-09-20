import React, { Component } from "react";
import { Col, Button, Popover, OverlayTrigger } from "react-bootstrap";
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
        <Col key={item.id} xs={3}>
          <figure class="image-block">
            <img
              src={
                item.image
                  ? item.image
                  : "https://eloquentjavascript.net/img/cover.jpg"
              }
              alt=""
            />
            <figcaption>
              <h4>{item.title}</h4>
              <p className="my-p">{item.description || "No description"}</p>
              <h4>{item.authors || "No authors"}</h4>
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
            </figcaption>
          </figure>
        </Col>
      );
    });
  }
}

export default RenderCards;
