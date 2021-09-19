import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Form, InputGroup, FormControl, Row } from "react-bootstrap";
import RenderCards from "./RenderCards";
import axios from "axios";
class Search extends Component {
  state = { searchBooks: [], searchTerm: "" };
  getSearchResult = (search) => {
    const { isAuthenticated } = this.props.auth0;
    Promise.all([
      axios.get(`http://localhost:3333/search?q=${search}`),
      isAuthenticated &&
        axios.get(
          `http://localhost:3333/readData?email=${this.props.auth0.user.email}`
        ),
    ])
      .then(([search, favRes]) => {
        if (!isAuthenticated || favRes?.data?.length === 0)
          return this.setState({ searchBooks: search.data });
        else {
          const searchBooks = [...search.data];
          searchBooks.filter(({ id }, i) => {
            const newFav = favRes.data.filter(({ id: favId }) => favId === id);
            return newFav.length > 0
              ? searchBooks.splice(i, 1, ...newFav)
              : null;
          });

          this.setState({ searchBooks: searchBooks });
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
    return (
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();

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
            email={this.props.auth0?.user?.email}
            isAuthenticated={this.props.auth0?.isAuthenticated}
          />
        </Row>
      </>
    );
  }
}
export default withAuth0(Search);
