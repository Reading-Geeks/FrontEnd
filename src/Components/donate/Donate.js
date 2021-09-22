import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import AddForm from "./AddForm";
import AddBookCard from "./AddBookCard";
import { Row } from "react-bootstrap";
import UpdateBook from "./UpdateBook";
import axios from "axios";

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArray: [],
      otherBooks: [],
      userBooks: [],
      showModal: false,
      title: "",
      description: "",
      category: "",
      author: "",
      image: "",
      publishedDate: "",
      id: "",
      searchBooks: [],
    };
  }

  newBook = () => {
    this.read();
  };

  showUpdateForm = (item) => {
    this.setState({
      showModal: true,
      title: item.title,
      description: item.description,
      category: item.category,
      author: item.author,
      image: item.image,
      publishedDate: item.publishedDate,
      id: item._id,
    });
  };

  /*-------------------------------------------------componentDidMount----------------------------------------------------- */
  read = () => {
    const { isAuthenticated } = this.props.auth0;
    Promise.all([
      axios.get(`https://reading-geeks.herokuapp.com/donate`),
      isAuthenticated &&
        axios.get(
          `https://reading-geeks.herokuapp.com/readDonateData?email=${this.props.auth0.user.email}`
        ),
    ])
      .then(([finalresult, favdonateres]) => {
        if (!isAuthenticated || favdonateres?.data?.length === 0) {
          this.setState({
            booksArray: finalresult.data,
          });
        } else {
          const searchBooks = [...finalresult.data];
          let newFav;
          searchBooks.filter(({ title }, i) => {
            newFav = favdonateres.data.filter(
              ({ title: favId }) => favId === title
            );
            return newFav.length > 0
              ? searchBooks.splice(i, 1, ...newFav)
              : null;
          });
          const otherBooks = searchBooks.filter(({ email }) => {
            return email !== this.props.auth0.user.email ? true : false;
          });
          const userBooks = searchBooks.filter(({ email }) => {
            return email === this.props.auth0.user.email ? true : false;
          });
          this.setState({
            booksArray: searchBooks,
            otherBooks,
            userBooks,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  componentDidMount = () => {
    this.read();
  };

  /*----------------------------------------------------------------------------------------------------------------- */

  /*--------------------------------------------------Update (PUT) Book---------------------------------------------------- */
  updateBook = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const email = user?.email;

    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      author: e.target.author.value,
      image: e.target.image.value,
      publishedDate: e.target.publishedDate.value,
      email: email,
      // id: this.state.id,
    };
    const url = `https://reading-geeks.herokuapp.com/donate/${this.state.id}`;
    // const url = `https://reading-geeks.herokuapp.com/donate/${this.state.id}`;
    axios
      .put(url, obj)
      .then((result) => {
        this.read();
      })
      .catch((err) => console.log("Error while updating the data"));
  };
  /*----------------------------------------------------------------------------------------------------------------- */

  /*--------------------------------------------------Delete (DELETE) Book---------------------------------------------------- */

  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user?.email;

    const url = `https://reading-geeks.herokuapp.com/donate/${id}?email=${email}`;

    axios
      .delete(url)
      .then((result) => {
        this.read();
      })
      .catch((err) => console.log("Error while deleting the data"));
  };

  /*----------------------------------------------------------------------------------------------------------------- */

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  /*-----------------------------------------------------add Donate To Fav------------------------------------------- */

  addDonateToFav = (booksArray) => {
    const { user } = this.props.auth0;
    const email = user.email;
    const booksArray1 = { ...booksArray, takenemail: email, isFav: true };
    console.log(booksArray1);
    axios
      .post(`https://reading-geeks.herokuapp.com/addDonateData`, booksArray1)
      .then((result) => {
        this.read();
      })
      .catch((err) => {
        console.log("Error on adding data");
      });
  };

  /*----------------------------------------------------------------------------------------------------------------- */

  render() {
    return (
      <div>
        <AddForm newBook={this.newBook} read={this.read} />

        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Donated Books
        </h2>

        {!this.props.auth0.isAuthenticated && this.state.booksArray.length > 0 && (
          <Row xs={1} md={2} className="g-4">
            {this.state?.booksArray?.map((item) => {
              return (
                <AddBookCard
                  item={item}
                  showUpdateForm={this.showUpdateForm}
                  deleteBook={this.deleteBook}
                  addDonateToFav={this.addDonateToFav}
                />
              );
            })}
          </Row>
        )}
        {this.props.auth0.isAuthenticated && this.state.userBooks.length > 0 ? (
          <>
            <Row xs={1} md={2} className="g-4">
              {this.state?.otherBooks?.map((item) => {
                return (
                  <AddBookCard
                    item={item}
                    showUpdateForm={this.showUpdateForm}
                    deleteBook={this.deleteBook}
                    addDonateToFav={this.addDonateToFav}
                  />
                );
              })}
            </Row>
          </>
        ) : null}

        {this.state.userBooks.length > 0 ? (
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            My Books
          </div>
        ) : null}
        <Row xs={1} md={2} className="g-4">
          {this.state.userBooks.length > 0
            ? this.state.userBooks.map((item) => {
                return (
                  <AddBookCard
                    item={item}
                    showUpdateForm={this.showUpdateForm}
                    deleteBook={this.deleteBook}
                    addDonateToFav={this.addDonateToFav}
                  />
                );
              })
            : null}
        </Row>
        <UpdateBook
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          updateBook={this.updateBook}
          title={this.state.title}
          description={this.state.description}
          category={this.state.category}
          author={this.state.author}
          image={this.state.image}
          publishedDate={this.state.publishedDate}
        />
      </div>
    );
  }
}

export default withAuth0(Donate);
