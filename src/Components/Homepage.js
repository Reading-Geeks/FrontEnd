import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Carousel from "react-bootstrap/Carousel";
import "../homePage.css";
import img1 from "./assests/a.jpg";
import img3 from "./assests/c.jpg";
import img4 from "./assests/d.jpg";
import img5 from "./assests/e.jpg";
import img6 from "./assests/f.jpg";
import img7 from "./assests/g.jpg";
import img8 from "./assests/h.jpg";

import { Card, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

class Homepage extends Component {
  state = { bestSeller: [] };
  getBestSeller = async () => {
    try {
      const { data: bestSeller } = await axios.get(
        `https://reading-geeks.herokuapp.com/search/best-seller`
      );
      console.log(bestSeller);
      this.setState({ bestSeller });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getBestSeller();
  }
  mapStateToCards = () => {
    return this.state.bestSeller?.map((item) => {
      return (
        <>
        
          <div className="cardItem2">
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={
                    item.image
                      ? item.image
                      : "https://eloquentjavascript.net/img/cover.jpg"
                  }
                />
                <Card.Body>
                  <Card.Title style={{fontSize:"18px" }}>{item.title}</Card.Title>
                  <Card.Text>{item.authors || "No authors"}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </>
      );
    });
  };
  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <p className="first">
                “A reader lives a thousand lives before he dies . . . The man
                who never reads lives only one.”{" "}
              </p>
              <p className="name"> - George R.R. Martin</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="First slide" />
            <Carousel.Caption>
              <p className="first">
                “Reading gives us someplace to go when we have to stay where we
                are.”{" "}
              </p>
              <p className="name">– Mason Cooley</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="First slide" />
            <Carousel.Caption>
              <p className="first">
                "The reading of all good books is like a conversation with the
                finest minds of past centuries."
              </p>
              <p className="name">- Rene Descartes</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img5} alt="First slide" />
            <Carousel.Caption>
              <p className="first">
                “The more that you read, the more things you will know. The more
                that you learn, the more places you’ll go.”{" "}
              </p>
              <p className="name"> - Dr. Seuss</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img6} alt="First slide" />
            <Carousel.Caption>
              <p className="first">“Reading brings us unknown friends”</p>
              <p className="name">- Honoré de Balzac</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img7} alt="First slide" />
            <Carousel.Caption>
              <p className="first">
                “Reading is a basic tool in the living of a good life.”
              </p>
              <p className="name">- Mortimer J. Adler</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img8} alt="First slide" />
            <Carousel.Caption>
              <p className="first">
                “Reading is to the mind what exercise is to the body.”{" "}
              </p>
              <p className="name">— Sir Richard Steele</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div
          className="container"
          id="projects-text-section"
          style={{ marginTop: "100px" }}
        >
          <div className="text-center">
            <h2
              style={{ color: "#E51B23", fontSize: "50px", fontWeight: "bold" }}
            >
              THE{" "}
              <span
                style={{
                  color: "#E51B23",
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                BEST
              </span>{" "}
              SELLER{" "}
              <span
                style={{
                  color: "#E51B23",
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                BOOKS
              </span>
            </h2>
          </div>

        </div>
        <div className="ca">
        <div className="cardSlid">{this.mapStateToCards()}</div>
        </div>
        <div
          className="container"
          id="projects-text-section"
          style={{ marginBottom: "100px", marginTop: "100px" }}
        >
          <div className="text-center">
            <h2
              style={{ color: "#E51B23", fontSize: "50px", fontWeight: "bold" }}
            >
              READING{" "}   
              <span
                style={{
                  color: "#E51B23",
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
               CAN CHANGE
              </span>{" "}
              YOUR{" "}
              <span
                style={{
                  color: "#E51B23",
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                LIFE
              </span>
            </h2>
          </div>
        </div>
        <section className="card-area">
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div style={{ borderRadius: "20px" }} className="card-front">
                    <div className="card-front__tp card-front__tp--ski">
                      <h1>👨‍⚕️</h1>
                      <h2 className="card-front__heading">Reading Health</h2>
                    </div>
                    <div className="card-front__bt">
                      <p
                        style={{ color: "#082032", textAlign: "center" }}
                        className="card-front__text-view card-front__text-view--ski"
                      >
                        Research shows that regular reading
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    {/* <video className="video__container" autoPlay muted loop>
                    <source className="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4" />
                  </video> */}
                    <img
                      className="d-block w-100"
                      src="https://img.wattpad.com/01473c3e2e6cc157094459f8507c2daed8d3d569/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a775937443549687a51776755673d3d2d3935373832313931312e313633376433613962666537613139303430393237313830383736302e676966"
                      alt="First slide"
                      height="310"
                    />
                  </div>
                </div>
              </div>
              <div className="inside-page">
                <div className="inside-page__container">
                  <p
                    style={{
                      color: "#082032",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                    className="inside-page__text"
                  >
                    📕 improves brain connectivity.
                    <br />
                    📕 increases your vocabulary and comprehension.
                    <br />
                    📕 empowers you to empathize with other people.
                    <br />
                    📕 aids in sleep readiness.
                    <br />
                    📕 lowers blood pressure and heart rate.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Card: Beach */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--beach">
                      <h1>📖</h1>
                      <h2 className="card-front__heading">
                        Continuity of reading
                      </h2>
                      <p className="card-front__text-price"></p>
                    </div>
                    <div className="card-front__bt">
                      <p
                        style={{
                          color: "#082032",
                          textAlign: "center",
                          fontSize: "23px",
                        }}
                        className="card-front__text-view card-front__text-view--beach"
                      >
                        why should you read every day ?
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    {/* <video className="video__container" autoPlay muted loop>
                    <source className="video__media" src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                  </video> */}
                    <img
                      className="d-block w-100"
                      src="https://64.media.tumblr.com/4f43f5b358e470dbac4e710a09de22a4/f88826b3b3a43e79-9b/s400x600/ce11c861769d95ba402867dc593b9b8a576f03d6.gifv"
                      alt="First slide"
                      height="310"
                    />
                  </div>
                </div>
              </div>
              <div className="inside-page">
                <div className="inside-page__container">
                  <p
                    style={{
                      color: "#082032",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                    className="inside-page__text"
                  >
                    📝 A person who reads everyday gets better at it over time.
                    Not surprisingly, daily readers also gain more enjoyment
                    from it than those that read less often. It can even improve
                    memory and critical thinking skills. And activities like
                    reading have been linked to a lower risk
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Card: Camping */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--camping">
                      <h1> 🔋 </h1>
                      <h2 className="card-front__heading">
                        Develop a Reading Habit
                      </h2>
                      <p className="card-front__text-price"></p>
                    </div>
                    <div className="card-front__bt">
                      <p
                        style={{ color: "#082032", textAlign: "center" }}
                        className="card-front__text-view card-front__text-view--camping"
                      >
                      &nbsp;  How to Develop a Reading Habit ?
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    {/* <video className="video__container" autoPlay muted loop>
                    <source className="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                  </video> */}
                    <img
                      className="d-block w-100"
                      src="https://i.makeagif.com/media/5-02-2017/i0zJdk.gif"
                      alt="First slide"
                      height="310"
                    />
                  </div>
                </div>
              </div>
              <div className="inside-page">
                <div className="inside-page__container">
                  <p
                    style={{
                      color: "#082032",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                    className="inside-page__text"
                  >
                    📕 Set a goal.
                    <br />
                    📕 Schedule a time for reading.
                    <br />
                    📕 Find a good place to read.
                    <br />
                    📕 Eliminate distractions.
                    <br />
                    📕 Read actively.
                    <br />
                    📕 Keep a reading journal.
                    <br />
                    📕 Carry a book everywhere you go.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <br />
        <br />
        <br />
      </>
    );
  }
}
export default withAuth0(Homepage);
