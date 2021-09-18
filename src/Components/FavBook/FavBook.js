import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import RenderData from "./RenderData";
import RenderDonate from "./RenderDonate";
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
    // console.log(email);
    axios
      .get(`http://localhost:3333/userInfo?email=${email}`)
      .then((result) => {
        if (result.data.length === 0) {
          console.log("hi");
          const obj = {
            name: user.name,
            email: email,
            finishedBooks: "finishedBooks",
            categoriesOfInterest: "finishedBooks",
          };

          axios
            .post(`http://localhost:3333/addinfo`, obj)
            .then((result) => {
              this.setState({
                obj: result.data,
                finishedBooks: result.data[0].finishedBooks,
                categoriesOfInterest: result.data[0].categoriesOfInterest,
              });
            })
            .catch((err) => {
              console.log("Error on adding data");
            });
        } else {
          this.setState({
            obj: result.data,
            finishedBooks: result.data[0].finishedBooks,
            categoriesOfInterest: result.data[0].categoriesOfInterest,
          });
        }
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
    const obj = {
      name: event.target.name.value,
      email: event.target.email.value,
      finishedBooks: event.target.finishedBooks.value,
      categoriesOfInterest: event.target.categoriesOfInterest.value,
    };
    axios
      .put(`http://localhost:3333/updateUser/${this.state.obj[0]._id}`, obj)
      .then((result) => {
        this.setState({
          obj: result.data,
          showFlag: false,
          finishedBooks: result.data[0].finishedBooks,
          categoriesOfInterest: result.data[0].categoriesOfInterest,
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
            <Card.Text>Finished Books: {this.state.finishedBooks}</Card.Text>
            <Card.Text>
              Categories of Interest: {this.state.categoriesOfInterest}
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
        <RenderData />
        <RenderDonate />
      </>
    );
  }
}

export default withAuth0(FavBook);
