import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";

class UpdateBook extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Your Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateBook}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  defaultValue={this.props.title}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  defaultValue={this.props.description}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Category:</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  defaultValue={this.props.category}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author:</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  defaultValue={this.props.author}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  defaultValue={this.props.image}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPublishedDate">
                <Form.Label>Published Date:</Form.Label>
                <Form.Control
                  type="date"
                  name="publishedDate"
                  defaultValue={this.props.publishedDate}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={this.props.handleClose}
              >
                Save changes
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Discard
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateBook;
