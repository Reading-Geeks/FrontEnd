import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import {
  Form,
  InputGroup,
  FormControl,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
class Search extends Component {
  state = { searchBooks: [] };
  getSearchResult = (search) => {
    axios
      .get(`http://localhost:3333/search?q=${search}`)
      .then((res) => {
        this.setState({ searchBooks: res.data });
      })
      .catch((err) => console.error(err));
  };

  renderCards = () => {
    return this.state?.searchBooks?.map((item) => {
      return (
        <Col key={item.id}>
          <Card style={{ width: "18rem", height: "50rem" }}>
            <Card.Img
              variant="top"
              src={
                item.image
                  ? item.image
                  : "https://eloquentjavascript.net/img/cover.jpg"
              }
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.categories || "No categories"}</Card.Text>
              <Card.Text>{item.authors || "No authors"}</Card.Text>
              <Card.Text style={{ overflowY: "scroll" }}>
                {item.description || "No description"}
              </Card.Text>
              <Button variant="primary">Add To Favours </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };
  render() {
    console.log(this.state.searchBooks);
    const { user } = this.props.auth0;
    console.log(user);
    return (
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.getSearchResult(e.target.search.value);
          }}
        >
          <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
            Search
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>🔍</InputGroup.Text>
            <FormControl
              id="inlineFormInputGroupUsername"
              placeholder="Search Term"
              name="search"
            />
          </InputGroup>
        </Form>
        <Row>{this.renderCards()}</Row>
      </>
    );
  }
}
export default withAuth0(Search);
