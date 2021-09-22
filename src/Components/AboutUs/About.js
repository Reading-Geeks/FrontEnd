import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import AboutUsPage from "./AboutUsPage";
import Row from "react-bootstrap/Row";
import UpdateFromModel from "./UpdateFromModel";
import "./AboutUs.css";
import MissionAndVission from "./../../Assets/debby-hudson-i6ouFfkruL8-unsplash.jpg";
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
      .get(`https://reading-geeks.herokuapp.com/aboutus`)
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
      .put(`https://reading-geeks.herokuapp.com/updateAbotUs/${this.state.PersonId}`, obj)
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
        <div className="MissionAndVision">
          <img src={MissionAndVission} alt="Mission and Vision" />
        </div>
        <div className="developer">
          <h1>Developers Team</h1>
        </div>
        <Row Row xs={1} md={2} className="g-4">
          {this.state.FavAboutArr.map((item) => {
            return (
              <AboutUsPage
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
