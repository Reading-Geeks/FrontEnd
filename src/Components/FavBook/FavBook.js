import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
class FavBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFlag: false,
      obj: [],
      finishedBooks: "",
      categoriesOfInterest: "",
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`http://localhost:3333/userInfo?email=${email}`)
      .then((result) => {
        this.setState({
          obj: result.data,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };
  handleClose = () => {
    this.setState({
      showFlag: false,
    });
  };
  showUpdateFormModal = () => {
    this.setState({
      showFlag: true,
    });
  };
  updateUser = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    console.log(user);
    const email = user.email;
    const obj = {
      name: event.target.name.value,
      email: event.target.email.value,
      finishedBooks: event.target.finishedBooks.value,
      categoriesOfInterest: event.target.categoriesOfInterest.value,
    };
    axios
      .put(`http://localhost:3333/updateUser?email=${email}`, obj)
      .then((result) => {
        this.setState({
          obj: result.data,
          showFlag: false,
        });
      })
      .catch((err) => {
        console.log("Error in updating");
      });
  };

  render() {
    const { user } = this.props.auth0;
    return (
      <>
        <h1>Hello</h1>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>Name: {user.name}</Card.Text>
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>
              Finished Books: {this.state.obj.finishedBooks}
            </Card.Text>
            <Card.Text>
              Categories of Interest: {this.state.obj.categoriesOfInterest}
            </Card.Text>
            <Button variant="warning" onClick={this.showUpdateFormModal}>
              Update
            </Button>{" "}
          </Card.Body>
        </Card>

        <Modal show={this.state.showFlag} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Information</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Form onSubmit={this.updateUser}>
              <Modal.Body>
                <Form.Label></Form.Label>
                <pre>
                  Name
                  <Form.Control type="text" name="name" value={user.name} />
                </pre>
                <pre>
                  E-mail
                  <Form.Control type="text" name="email" value={user.email} />
                </pre>
                <pre>
                  Finished Books
                  <Form.Control
                    type="text"
                    name="finishedBooks"
                    defaultvalue={this.state.obj.finishedBooks}
                  />
                </pre>
                <pre>
                  Categories of Interest
                  <Form.Control
                    type="text"
                    name="categoriesOfInterest"
                    defaultvalue={this.state.obj.categoriesOfInterest}
                  />
                </pre>
              </Modal.Body>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Form>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(FavBook);
