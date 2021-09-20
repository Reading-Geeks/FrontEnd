import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
            
          <MDBCol md="4">
            <h5 className="title">Footer Content</h5>
            <img 
            src="https://api.time.com/wp-content/uploads/2015/06/521811839-copy.jpg?w=824&quality=70"
            width="500"
            height="200" />
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p className="red-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
        
      </div>
    </MDBFooter>
    
  );
}

export default Footer;