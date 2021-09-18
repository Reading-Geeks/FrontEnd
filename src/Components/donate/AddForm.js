import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

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
    const email = user.email;
    const url = `http://localhost:3333/donate`;
    // const url = `https://reading-geeks.herokuapp.com/donate`;

    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      author: e.target.author.value,
      publishedDate: e.target.publishedDate.value,
      email: email,
    };
    // console.log(obj);

    axios
      .post(url, obj)
      .then((result) => {
        const resultData = result.data;
        console.log(resultData);
        this.props.newBook(resultData);
      })
      .catch((err) => console.log(err));
  };

  /*----------------------------------------------------------------------------------------------------------------- */


  render() {
    return (
      <div>
        <Form onSubmit={this.addBook}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter Book Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Book Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Enter Book Description"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Book Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              placeholder="Enter Book Category"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAuthor">
            <Form.Label>Book Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              placeholder="Enter Book Author"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPublishedDate">
            <Form.Label>Book Published Date</Form.Label>
            <Form.Control
              type="date"
              name="publishedDate"
              placeholder="Enter Book Published Date"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Donate !
          </Button>
        </Form>
      </div>
    );
  }
}

export default withAuth0(AddForm);
