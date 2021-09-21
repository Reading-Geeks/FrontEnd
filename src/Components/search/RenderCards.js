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
        <Col key={item.id}>
          <div className="wrapper">
            <div className="product-img">
              <img
                src={
                  item.image
                    ? item.image
                    : "https://eloquentjavascript.net/img/cover.jpg"
                }
                alt=""
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1>{item.title}</h1>
                <h2> {item.authors || "No authors"}</h2>
                <p> {item.description || "No description"}</p>
              </div>
              <div className="product-price-btn">
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
                      className="bi bi-bookmark-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                    </svg>
                  </Button>
                ) : (
                  this.popOver()
                )}
              </div>
            </div>
          </div>
        </Col>
      );
    });
  }
}

export default RenderCards;
