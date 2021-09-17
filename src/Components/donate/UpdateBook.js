import React, { Component } from "react";
import {Form, Modal, Button} from 'react-bootstrap';

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
                <Form.Control type="text" name='title' />
              </Form.Group>
              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// export default UpdateBook;
