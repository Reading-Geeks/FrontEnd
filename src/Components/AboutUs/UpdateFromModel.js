import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class UpdateFromModel extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeModel}>
          <Modal.Header closeButton>
            <Modal.Title className="title">update About Us </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="formInsideModalf" onSubmit={this.props.ubdateInfo}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Edit Name </Form.Label>
                <Form.Control
                  type="text"
                  name="PersonName"
                  defaultValue={this.props.PersonName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Edit Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  defaultValue={this.props.image}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Edit description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  defaultValue={this.props.Description}
                />
              </Form.Group>
              <Modal.Footer>
               
                <Button className="submitabout" variant="primary" type="submit">
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
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default UpdateFromModel;
