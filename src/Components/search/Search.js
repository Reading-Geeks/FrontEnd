import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Row } from "react-bootstrap";
import RenderCards from "./RenderCards";
import axios from "axios";
import "./Search.css";
class Search extends Component {
  state = { searchBooks: [], searchTerm: "" };
  getSearchResult = (search) => {
    const { isAuthenticated } = this.props.auth0;
    Promise.all([
      // axios.get(`http://localhost:3333/search?q=${search}`),
      axios.get(`https://reading-geeks.herokuapp.com/search?q=${search}`),
      isAuthenticated &&
        axios.get(
          // `http://localhost:3333/readData?email=${this.props.auth0.user.email}`
          `https://reading-geeks.herokuapp.com/readData?email=${this.props.auth0.user.email}`
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
      // .post(`http://localhost:3333/addData`, object)
      .post(`https://reading-geeks.herokuapp.com/addData`, object)
      .then((_) => {
        this.getSearchResult(this.state.searchTerm);
      })
      .catch((err) => console.error(err));
  };
  render() {
    return (
      <>
        <div>
          <div className="search--form-container">
            {/* <img src={heroImage} alt="hero img" /> */}
            <div className="box">
              <form
                onMouseLeave={(e) => {
                  e.target.style.width = "50rem";
                }}
                className="search--form"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.getSearchResult(e.target.search.value);
                  this.setState({ searchTerm: e.target.search.value });
                }}
              >
                <input
                  type="text"
                  className="input--search"
                  name="search"
                  onMouseOutCapture={(e) => {
                    e.target.style.width = "100%";
                  }}
                />
              </form>
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        <Row className="my-card g-4 search--card" xs={1} md={2}>
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
