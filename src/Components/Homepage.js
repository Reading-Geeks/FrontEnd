import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Carousel from 'react-bootstrap/Carousel';
import {
  Form,
  InputGroup,
  FormControl,
  Card,
  Button,
  Row,
  Col,
  Container,
  Badge,
  CardBody
} from "react-bootstrap";

class Homepage extends Component {
  render() {
    return (
<>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2021/09/14/Gateway_Quote_A2_09-14_.jpg"
      alt="First slide"
      height="500"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/143/original/will_harrow_bookshop_desktop_v3.jpg?1631531592"
      alt="Second slide"
      height="500"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2021/09/16/Gateway_Quote_A4_09-16.jpg"
      alt="Third slide"
      height="500"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div class="container" id="projects-text-section" style={{marginTop:'100px'}}>
        <div class="text-center">
            <h2 style={{color:'blue' , fontSize:'50px' , fontWeight:'bold'}} >Reading  <span style={{color:'red' , fontSize:'50px' , fontWeight:'bold'}}>changes</span> your <span style={{color:'red' , fontSize:'50px' , fontWeight:'bold'}}>life</span></h2>
        </div>

        <h1 class="lead w-75 text-center mx-auto" style={{ fontSize:'20px' , fontWeight:'bold'}}>
        Reading increases your own creativity, sometimes sparking other ideas in your life
        </h1>
    </div>

<section className="section section-lg pt-lg-0 mt--200" style={{marginTop:'70px'}}>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          Research shows that regular reading:

                          </h6>
                          <p className="description mt-3">
                      
improves brain connectivity.<b />
increases your vocabulary and comprehension.<b />
empowers you to empathize with other people.<b />
aids in sleep readiness.<b />
reduces stress.<b />
lowers blood pressure and heart rate.<b />
fights depression symptoms.<b />
prevents cognitive decline as you age
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                          why should you read every day ?
                          </h6>
                          <p className="description mt-3">
                            
A person who reads everyday gets better at it over time. Not surprisingly, daily readers also gain more enjoyment from it than those that read less often. It can even improve memory and critical thinking skills. And activities like reading have been linked to a lower risk of Alzheimer's disease
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <Card.Body className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          How to Develop a Reading Habit

                          </h6>
                          <p className="description mt-3">
                          
Schedule a time for reading. ...<br />
Find a good place to read. ...<br />
Eliminate distractions. ...<br />
Read actively. ...<br />
Keep a reading journal. ...<br />
Carry a book everywhere you go.<br />

                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>


          <div class="container" id="projects-text-section" style={{marginTop:'100px'}}>
        <div class="text-center">
            <h2 style={{color:'blue' , fontSize:'50px' , fontWeight:'bold'}} >Best sites to <span style={{color:'red' , fontSize:'50px' , fontWeight:'bold'}}>READ</span></h2>
        </div>

        <h1 class="lead w-75 text-center mx-auto" style={{ fontSize:'20px' , fontWeight:'bold'}}>
        This list contains the best sites to read and buy books of various genres
        </h1>
    </div>

    <div class="sharemagic-section" id="projects" data-bg="/pics/charity/stars-bg.png" style={{marginTop:'70px'}}>
        <div class="container">
            <div id="projects-grid">
                <a href="https://www.thriftbooks.com/">
                    <div class="row g-0 projects-grid-row-1" data-bg="/pics/charity/projects-bg-1.png" style={{color:'white',backgroundColor:'#5F7FE8',fontSize:'40px'}}>
                        <div class="col-5 p-0" >
                            <img class="d-block w-100 slanted-left" src="https://static.thriftbooks.com/images/tblogo-green_20200225.svg" height='200'/>
                        </div>
                        <div class="col-7 p-0 pe-4 projects-grid-text text-end my-auto" >
                        Thriftbooks<br /> IN MAGIC
                        </div>
                    </div>
                </a>
                <a href="https://www.bookdepository.com/?utm_source=Affiliate_WindowUS&utm_medium=Affiliate_Marketing&utm_campaign=85386%20&utm_term=VigLinkInc&awc=5487_1631901790_26494c9db3a52b84efed0611ef1464e7">
                    <div class="row g-0 projects-grid-row-2" data-bg="/pics/charity/projects-bg-2.png" style={{color:'white',backgroundColor:'#F97360',fontSize:'40px'}}>
                        <div class="col-7 p-0 ps-4 projects-grid-text text-start my-auto">
                        bookdepository <br /> books
                        </div>
                        <div class="col-5 p-0">
                            <img class="d-block w-100 slanted-right" src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.8/img/logo.svg" height='170'/>
                        </div>
                    </div>
                </a>
                <a href="https://www.costco.com/books.html">
                    <div class="row g-0 projects-grid-row-3" data-bg="/pics/charity/projects-bg-3.png" style={{color:'white',backgroundColor:'#B5D1EF',fontSize:'40px'}}>
                        <div class="col-5 p-0">
                            <img class="d-block w-100 slanted-left" src="https://www.costco.com/wcsstore/CostcoGLOBALSAS/images/Costco_Logo-1.png" height='170'/>
                        </div>
                        <div class="col-7 p-0 pe-4 projects-grid-text text-end my-auto">
                        Costco<br />
                            WholeSale
                        </div>
                    </div>
                </a>
                <a href="https://www.betterworldbooks.com/explore?utm_source=affiliate&utm_campaign=Text&utm_medium=CJ_Link&utm_term=100331734&utm_content=Homepage&cjevent=aca46c0117e211ec83d991030a180513">
                    <div className="c" class="row g-0 projects-grid-row-4" data-bg="/pics/charity/projects-bg-4.png" style={{color:'white',backgroundColor:'#ADED77',fontSize:'40px' , textDecoration:'none'}}>
                        <div class="col-7 p-0 ps-4 projects-grid-text text-start my-auto">
                        Betterworld<br />Books
                        </div>
                        <div class="col-5 p-0">
                            <img class="d-block w-100 slanted-right" src="https://www.betterworldbooks.com/content/images/logos/logo.svg" height='170'/>
                        </div>
                    </div>
                </a>
            </div>

            {/* <!--<a href="" class="view-all-link"><i class="fas fa-chevron-right"></i> View all ShareMagic projects</a>--> */}
        </div>
    </div>
<br /><br /><br /><br />
          
        </>
    );
  }
}
export default withAuth0(Homepage);
