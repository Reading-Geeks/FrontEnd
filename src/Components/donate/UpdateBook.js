import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";

class UpdateBook extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.handleClose}>
      
          <Modal.Body>
            <Button
              variant="secondary"
              onClick={this.props.handleClose}
              className="closeBtn"
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Button>

            <Form onSubmit={this.props.updateBook} className="formInsideModal">
              <h4>Edit Your Book</h4>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  defaultValue={this.props.title}
                  className="inputFormModal"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  defaultValue={this.props.description}
                  className="inputFormModal"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Category:</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  defaultValue={this.props.category}
                  className="inputFormModal"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author:</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  defaultValue={this.props.author}
                  className="inputFormModal"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  type="url"
                  name="image"
                  defaultValue={this.props.image}
                  className="inputFormModal"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPublishedDate">
                <Form.Label>Published Date:</Form.Label>
                <Form.Control
                  type="date"
                  name="publishedDate"
                  defaultValue={this.props.publishedDate}
                  className="inputFormModal"
                />
              </Form.Group>

              <Button
                className="submitDonate"
                variant="primary"
                type="submit"
                onClick={this.props.handleClose}
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateBook;
