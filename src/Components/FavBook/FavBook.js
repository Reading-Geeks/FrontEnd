import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Form, Modal, Button } from "react-bootstrap/";
import RenderData from "./RenderData";
import RenderDonate from "./RenderDonate";
import "./favBook.css";
class FavBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFlag: false,
      obj: [],
      finishedBooks: "",
      categoriesOfInterest: "",
      image: "",
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`http://localhost:3333/userInfo?email=${email}`)
      .then((result) => {
        if (result.data.length === 0) {
          const obj = {
            name: user.name,
            email: email,
            finishedBooks: "finishedBooks",
            categoriesOfInterest: "finishedBooks",
            image: this.state.image,
          };

          axios
            .post(`http://localhost:3333/addinfo`, obj)
            .then((result) => {
              this.setState({
                obj: result.data,
                finishedBooks: result.data[0].finishedBooks,
                categoriesOfInterest: result.data[0].categoriesOfInterest,
                image: result.data[0].image,
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
            image: result.data[0].image,
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
      image: event.target.image.value,
    };
    // console.log(obj)
    axios
      .put(`http://localhost:3333/updateUser/${this.state.obj[0]._id}`, obj)
      .then((result) => {
        this.setState({
          obj: result.data,
          showFlag: false,
          finishedBooks: result.data[0].finishedBooks,
          categoriesOfInterest: result.data[0].categoriesOfInterest,
          image: result.data[0].image,
        });
        console.log(this.state.image);
      })
      .catch((err) => {
        console.log("Error in updating");
      });
  };

  render() {
    const { user } = this.props.auth0;
    return (
      <>
        <div className="wrapper">
          <div className="product-img">
            <img
              src={this.state.image}
              height="420"
              width="327"
              alt="description "
            />
          </div>
          {/* {console.log(this.state.image)} */}

          <div className="product-info">
            <div className="product-text">
              <h1> {user.name}</h1>
              <h2>{user.email}</h2>
              <p>
                Harvest Vases are a reinterpretation
                <br /> of peeled fruits and vegetables as
                <br /> functional objects. The surfaces
                <br />
                Finished Books: {this.state.finishedBooks},<br />
                Categories of Interest: {this.state.categoriesOfInterest}
              </p>
              <div className="product-price-btn">
                <Button onClick={this.showUpdateFormModal}>Update</Button>
              </div>
            </div>
          </div>
        </div>

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
                  URL Image:
                  <Form.Control
                    type="text"
                    name="image"
                    defaultValue={this.state.imag}
                  />
                </pre>
                <pre>
                  Finished Books
                  <Form.Control
                    type="text"
                    name="finishedBooks"
                    defaultValue={this.state.finishedBooks}
                  />
                </pre>
                <pre>
                  Categories of Interest
                  <Form.Control
                    type="text"
                    name="categoriesOfInterest"
                    defaultValue={this.state.categoriesOfInterest}
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
        <RenderDonate />
        <RenderData />
      </>
    );
  }
}

export default withAuth0(FavBook);
