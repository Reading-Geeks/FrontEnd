import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Row, Button, Card } from "react-bootstrap/";
import { withAuth0 } from "@auth0/auth0-react";
class RenderData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [],
      id: "",
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;

    axios
      .get(`http://localhost:3333/readData?email=${email}`)
      .then((result) => {
        this.setState({
          obj: result.data,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };
  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;

    axios
      .delete(`http://localhost:3333/removeData/${id}?email=${email}`)
      .then((result) => {
        this.setState({
          obj: result.data,
        });
      })
      .catch((err) => {
        console.log("Error on deleting");
      });
  };

  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.state.obj.map((item) => {
            return (
              <>
                <Card>
                  <Card.Body>
                    <Card.Title>Title: {item.title}</Card.Title>
                    <Card.Img variant="top" src={`${item.image}/100px180`} />
                    <Card.Text>Description: {item.description}</Card.Text>
                    <Card.Text>Authors: {item.authors}</Card.Text>
                    <Card.Text>Categories: {item.categories}</Card.Text>
                    <Card.Text>Published Date: {item.publishedDate}</Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => this.deleteBook(item._id)}
                    >
                      Delete
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </Row>
      </>
    );
  }
}

export default withAuth0(RenderData);
