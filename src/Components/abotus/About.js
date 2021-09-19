
import React, { Component } from "react";
// import { Card, Button , CardGroup } from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Aboutuspage from "./Aboutuspage"
import Row from 'react-bootstrap/Row';
import UpdateFromModel from "./UpdateFromModel";


class About extends Component {



    constructor(props) {

        super(props);
        this.state = {
            FavAboutArr: [],
            showFlag: false,
            PersonName: '',
            Description: '',
            email: '',
            image: '',
            PersonId: '',
            showModel: true
        }


    }


    componentDidMount = () => {
        const { user } = this.props.auth0;
        const email = user.email;
        axios.get(`http://localhost:3333/aboutus`).then(result => {
            this.setState({
                FavAboutArr: result.data
            })


        })

            .catch(err => {


                console.log('Error');

            })

    }




    handleClose = () => {
        this.setState({
            showModel: true
        })
    }

      showUpdateForm = (item) => {
        this.setState({
            showModel: false,
          Name : item,
          Description: item.Description,
          Status: item.Status,
          bookId: item._id

        })
      }

      updateBook = (event) => {
        event.preventDefault();
        const { user } = this.props.auth0;
        const email = user.email;
        const obj = {
          BookName: event.target.BookName.value,
          Description: event.target.Description.value,
          Status: event.target.Status.value,
          email: email
        }

        axios
          .put(`https://lab-books.herokuapp.com/updateBook/${this.state.bookId}`, obj)
          .then(result => {
            this.setState({
              FavBookArr: result.data,
              showFlag: false
            })
          })
          .catch(err => {
            console.log('error in updating the data');
          })
      }





























    render() {

        return (

            <>
                <Row Row xs={1} md={3} className="g-4">

                    {this.state.FavAboutArr.map(item => {

                        return (<Aboutuspage
                            item={item}
                            Update={this.showUpdateForm}
                            show ={this.state.show}
                            showUpdateform ={this.showUpdateForm}
                        />)







                    })}
                </Row>

                <UpdateFromModel

                    show={this.state.showModel}
                    handleClose={this.handleClose}



                />

            </>



        )



    }












}




export default withAuth0(About);