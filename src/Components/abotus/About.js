import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import Aboutuspage from "./Aboutuspage";
import Row from "react-bootstrap/Row";
import UpdateFromModel from "./UpdateFromModel";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FavAboutArr: [],
      showFlag: false,
      PersonName: "",
      Description: "",
      email: "",
      image: "",
      PersonId: "",
      showModel: false,
    };
  }
  componentDidMount = () => {
    axios
      .get(`http://localhost:3333/aboutus`)
      .then((result) => {
        this.setState({
          FavAboutArr: result.data,
        });
      })
      .catch((err) => {
        console.log("Error");
      });
  };
  handleClose = () => {
    this.setState({
      showModel: true,
    });
  };
  closeModel = () => {
    this.setState({
      showModel: false,
    });
  };
  showUpdateForm = (item) => {
    this.setState({
      showModel: true,
      PersonName: item.PersonName,
      image: item.image,
      Description: item.Description,
      PersonId: item._id,
    });
  };
  ubdateInfo = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    console.log(email);
    const obj = {
      PersonName: event.target.PersonName.value,
      Description: event.target.Description.value,
      image: event.target.image.value,
      email: email,
      PersonId: this.state.PersonId,
    };
    axios
      .put(`http://localhost:3333/updateAbotUs/${this.state.PersonId}`, obj)
      .then((result) => {
        this.setState({
          FavAboutArr: result.data,
          showModel: false,
        });
      })
      .catch((err) => {
        console.log("error in updating the data");
      });
  };
  render() {
    return (
      <>
        <Card className="text-center">
          <Card.Header
            style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
          >
            Our Mission
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text style={{ fontFamily: "Times New Roman", fontSize: 25 }}>
              Our main purpose is to spread the awareness and show the
              importance of reading. And make it easier to exchange books among
              community member to have the oppurtunity to read a great books.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>

        <Card className="text-center">
          <Card.Header
            style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
          >
            Our Vision
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text style={{ fontFamily: "Times New Roman", fontSize: 25 }}>
              We are aiming to expand our activity, and start making an events
              that are related to reading in schools in order to introduce how
              the reading is important and interesting to children.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>

        <Row Row xs={1} md={2} className="g-4">
          {this.state.FavAboutArr.map((item) => {
            return (
              <Aboutuspage
                item={item}
                showUpdateform={this.showUpdateForm}
                email={this.props.auth0?.user?.email}
              />
            );
          })}
        </Row>
        <UpdateFromModel
          show={this.state.showModel}
          handleClose={this.handleClose}
          closeModel={this.closeModel}
          PersonName={this.state.PersonName}
          Description={this.state.Description}
          image={this.state.image}
          ubdateInfo={this.ubdateInfo}
        />
      </>
    );
  }
}
export default withAuth0(About);
