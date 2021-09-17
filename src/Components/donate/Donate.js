import React, { Component } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { withAuth0 } from "@auth0/auth0-react";
import AddForm from "./AddForm";
import AddBookCard from "./AddBookCard";
import { Row } from "react-bootstrap";
import UpdateBook from "./UpdateBook";

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArray: [],
      showCard: false,
      showModal: false,
    };
  }

  newBook = (newData) => {
    this.setState({
      booksArray: newData,
      showCard: true,
    });
  };

//   showUpdateForm=(item)=>{

//   }

//   updateBook =()=>{

//   }

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
          {this.state.showCard &&
            this.state.booksArray.map((item) => {
              return <AddBookCard item={item} showUpdateForm={this.showUpdateForm} />;
            })}
        </Row>

        {/* <UpdateBook
          showModal={this.state.showModal}
          handleClose={this.handleClose}
        /> */}
      </div>
    );
  }
}

export default withAuth0(Donate);
