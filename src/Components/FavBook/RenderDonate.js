import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap/";
import { withAuth0 } from "@auth0/auth0-react";
import "./donate.css";
class RenderDonate extends React.Component {
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
      .get(`https://reading-geeks.herokuapp.com/readDonateData?email=${email}`)
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
      .delete(`https://reading-geeks.herokuapp.com/removeDonateData/${id}?email=${email}`)
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
      {this.state.obj.length!==0?<h2 className="myh">My Books</h2>:null}
        <Row xs={1} md={2} className="g-4dfav">
          {this.state.obj.map((item) => {
            return (
              <>
                <Col className="col-3">
                  <div className="wrapperd">
                    <div className="product-imgd">
                      <img
                        src={item.image}
                        height="420"
                        width="327"
                        alt="description "
                      />
                    </div>
                    <div className="product-infod">
                      <div className="product-textd">
                        <h1>{item.title}</h1>
                        <h2> {item.authors || "No authors"}</h2>
                        <p> {item.description || "No description"}</p>
                      </div>
                      <div className="product-price-btnd">
                      <Button
                      variant="dark"
                      onClick={() => this.deleteBook(item._id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                    </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      
      </>
    );
  }
}

{
  /* <Row xs={1} md={3} className="g-4">
          {this.state.obj.map((item) => {
            return (
              <>
                <Card>
                  <Card.Body>
                    <Card.Title>Title: {item.title}</Card.Title>
                    <Card.Img variant="top" src={`${item.image}`} />

                    <Card.Text>Description: {item.description}</Card.Text>
                    <Card.Text>Authors: {item.author}</Card.Text>
                    <Card.Text>Categories: {item.category}</Card.Text>
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
        </Row> */
}

export default withAuth0(RenderDonate);
