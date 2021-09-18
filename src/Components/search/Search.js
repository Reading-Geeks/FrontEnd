import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Form, InputGroup, FormControl, Row } from "react-bootstrap";
import RenderCards from "./RenderCards";
import axios from "axios";
class Search extends Component {
  state = { searchBooks: [], searchTerm: "" };
  getSearchResult = (search) => {
    Promise.all([
      axios.get(`http://localhost:3333/search?q=${search}`),
      axios.get(
        `http://localhost:3333/readData?email=${this.props.auth0.user.email}`
      ),
    ])
      .then(([search, favRes]) => {
        console.log("favRes", favRes);
        console.log("search", search);
        if (favRes.data.length === 0)
          return this.setState({ searchBooks: search.data });
        else {
          const searchBooks = [...search.data];
          const notInFav = searchBooks.filter(({ id }) => {
            return !favRes.data.some(({ id: favId }) => favId === id);
          });
          const myFavBooks = favRes.data.filter(({ id }) => {
            return searchBooks.some(({ id: favId }) => favId === id);
          });
          const finalArr = [...notInFav, ...myFavBooks];
          this.setState({ searchBooks: finalArr });
        }
      })
      .catch((err) => console.error(err));
  };
  addToFav = (object) => {
    axios
      .post(`http://localhost:3333/addData`, object)
      .then((_) => {
        this.getSearchResult(this.state.searchTerm);
      })
      .catch((err) => console.error(err));
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
            console.log(e.target.search.value);
            this.getSearchResult(e.target.search.value);
            this.setState({ searchTerm: e.target.search.value });
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
        <Row>
          <RenderCards
            searchBooks={this.state.searchBooks}
            addToFav={this.addToFav}
            email={this.props.auth0.user.email}
          />
        </Row>
      </>
    );
  }
}
export default withAuth0(Search);
