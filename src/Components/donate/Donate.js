import React, { Component } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
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
      // showCard: false,
      showModal: false,
      title: "",
      description: "",
      category: "",
      author: "",
      publishedDate: "",
      id: "",
    };
  }

  newBook = (newData) => {
    this.setState({
      booksArray: newData,
      // showCard: true,
    });
  };

  showUpdateForm = (item) => {
    this.setState({
      showModal: true,
      title: item.title,
      description: item.description,
      category: item.category,
      author: item.author,
      publishedDate: item.publishedDate,
      id: item._id,
    });
  };

  /*-------------------------------------------------componentDidMount----------------------------------------------------- */
  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    const url = `http://localhost:3333/donate/?email=${email}`;

    axios
    .get(url)
    .then(result =>{
      const resultData = result.data;
      if(this.state.booksArray){
        this.setState({
          booksArray: resultData,
        })
      }
    })
    .catch(err => console.log(err))
  };

  /*----------------------------------------------------------------------------------------------------------------- */

  /*--------------------------------------------------Update (PUT) Book---------------------------------------------------- */
  updateBook = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;

    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      author: e.target.author.value,
      publishedDate: e.target.publishedDate.value,
      email: email,
      // id: this.state.id,
    };
    const url = `http://localhost:3333/donate/${this.state.id}`;
    // const url = `https://reading-geeks.herokuapp.com/donate/${this.state.id}`;
    console.log("url", url);
    axios
      .put(url, obj)
      .then((result) => {
        const resultData = result.data;
        console.log(resultData);
        this.setState({
          booksArray: resultData,
          showModal: false,
        });
      })
      .catch((err) => console.log("Error while updating the data"));
  };
  /*----------------------------------------------------------------------------------------------------------------- */

  /*--------------------------------------------------Delete (DELETE) Book---------------------------------------------------- */

  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;

    const url = `http://localhost:3333/donate/${id}?email=${email}`;

    axios
      .delete(url)
      .then((result) => {
        const resultData = result.data;
        // console.log(resultData);
        this.setState({
          booksArray: resultData,
        });
      })
      .catch((err) => console.log("Error while deleting the data"));
  };

  /*----------------------------------------------------------------------------------------------------------------- */

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <AddForm newBook={this.newBook} />

        <Row xs={1} md={5} className="g-4">
          {this.state.booksArray.map((item) => {
            return (
              <AddBookCard
                item={item}
                showUpdateForm={this.showUpdateForm}
                deleteBook={this.deleteBook}
              />
            );
          })}
        </Row>

        <UpdateBook
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          updateBook={this.updateBook}
          title={this.state.title}
          description={this.state.description}
          category={this.state.category}
          author={this.state.author}
          publishedDate={this.state.publishedDate}
        />
      </div>
    );
  }
}

export default withAuth0(Donate);
