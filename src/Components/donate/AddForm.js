import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./donate.css";
import image3 from "./image/book3-cropped.jpg";
// import image13 from "./image/book4.jpg";
import image13 from "./image/book13-cropped.jpg";
// import image6 from "./image/book6.jpg";
import image6 from "./image/book11.jpg";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArray: [],
      // title: "",
      // description: "",
      // category: "",
      // author: "",
      // publishedDate: "",
    };
  }

  /*--------------------------------------------------Add (POST) Book---------------------------------------------------- */

  addBook = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const email = user?.email;
    const url = `http://localhost:3333/donate`;
    // const url = `https://reading-geeks.herokuapp.com/donate`;

    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      author: e.target.author.value,
      image: e.target.image.value,
      publishedDate: e.target.publishedDate.value,
      email: email,
    };
    console.log(obj);

    axios
      .post(url, obj)
      .then((result) => {
        const resultData = result.data;
        // console.log(resultData);
        this.props.newBook(resultData);
      })
      .catch((err) => console.log(err));
  };

  /*----------------------------------------------------------------------------------------------------------------- */

  render() {
    return (
      <div className="d-flex flex-column mb-3">
        <h1 className="firstSentence">
          Instead of throwing out your old books or recycling them,{" "}
          <b className="b">DONATE</b> them so they can be read and enjoyed again.
        </h1>
        <img
          src={image13}
          className="img-fluid shadow-4"
          className="responsiveImage"
          alt="..."
        />

        <h2 className="secondSentence">
          Your used books make a big difference in other people's <b className="b">minds</b>.
          <pre /> No matter how big or small, but your{" "}
          <b className="b">donations</b> are needed and appreciated.
          <pre />
        </h2>
        <h4 className="secondSentence">
          {" "}
          Just fill out the form below with the required information of your
          book!
        </h4>
        <div className="formDiv">
          <Form onSubmit={this.addBook} className="p-2">
            <h2>Book Donation Form</h2>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label className="firstLabel">Book Title: </Form.Label>
              <Form.Control type="text" name="title" placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Book Description:</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Book Category:</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Category"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAuthor">
              <Form.Label>Book Author:</Form.Label>
              <Form.Control type="text" name="author" placeholder="Author" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Book Image:</Form.Label>
              <Form.Control type="url" name="image" placeholder="Image URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPublishedDate">
              <Form.Label>Book Published Date:</Form.Label>
              <Form.Control
                type="date"
                name="publishedDate"
                placeholder="Published date"
              />
              <Form.Text>
                Thank you for your interest in donating books !
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Button className="submitDonate" variant="primary" type="submit">
                Donate <span />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-book"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
              </Button>
            </Form.Group>
          </Form>

          <Card.Img className="img-thumbnail" variant="top" src={image6} />
        </div>
      </div>
    );
  }
}

export default withAuth0(AddForm);
