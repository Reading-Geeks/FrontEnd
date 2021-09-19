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
      image:"",
      publishedDate: "",
      id: "",
      searchBooks: [],
      // searchTerm: "" ,
    };
  }

  newBook = (newData) => {
    this.read()
    // this.setState({
    //   booksArray: newData,
      // showCard: true,
    // });
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
      axios.get(`http://localhost:3333/donate`),
      isAuthenticated &&
        axios.get(
          `http://localhost:3333/readDonateData?email=${this.props.auth0.user.email}`
        ),
    ])

      .then(([finalresult, favdonateres]) => {
        console.log(finalresult.data);
        console.log(favdonateres.data);

        if (!isAuthenticated || favdonateres?.data?.length === 0)
          return this.setState({ booksArray: finalresult.data });
        else {
          // console.log("hi")
          const searchBooks = [...finalresult.data];
          console.log(searchBooks);
          searchBooks.filter(({ title }, i) => {
            const newFav = favdonateres.data.filter(
              ({ title: favId }) => favId === title
            );
            return newFav.length > 0
              ? searchBooks.splice(i, 1, ...newFav)
              : null;
          });

          this.setState({ booksArray: searchBooks });
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
    const url = `http://localhost:3333/donate/${this.state.id}`;
    // const url = `https://reading-geeks.herokuapp.com/donate/${this.state.id}`;
    console.log("url", url);
    axios
      .put(url, obj)
      .then((result) => {
        // const resultData = result.data;
        // console.log(resultData);
        // this.setState({
        //   booksArray: resultData,
        //   showModal: false,
        // });
        this.read();
      })
      .catch((err) => console.log("Error while updating the data"));
  };
  /*----------------------------------------------------------------------------------------------------------------- */

  /*--------------------------------------------------Delete (DELETE) Book---------------------------------------------------- */

  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user?.email;

    const url = `http://localhost:3333/donate/${id}?email=${email}`;

    axios
      .delete(url)
      .then((result) => {
        const resultData = result.data;
        // console.log(resultData);
        // this.setState({
        //   booksArray: resultData,
        // });
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
      .post(`http://localhost:3333/addDonateData`, booksArray1)
      .then((result) => {
        console.log(result);
        // this.setState({
        //   booksArray: result.data,
        this.read();
        // });
      })
      .catch((err) => {
        console.log("Error on adding data");
      });
  };

  /*----------------------------------------------------------------------------------------------------------------- */

  render() {
    const { user } = this.props.auth0;
    {
      console.log(this.state.booksArray);
    }
    return (
      <div>
        <AddForm newBook={this.newBook}
        read={this.read} />

        <Row xs={1} md={5} className="g-4">
          {this.state.booksArray.map((item) => {
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
