import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
class UpdateFromModel extends React.Component {
    render() {
        return (
            <> 
                <Modal show={this.props.show} onHide={this.props.closeModel}>
                    <Modal.Header closeButton>
                        <Modal.Title className="title">update About Us  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.ubdateInfo}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Edit Name </Form.Label>
                                <Form.Control type="text" name='PersonName' defaultValue={this.props.PersonName} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Edit Image</Form.Label>
                                <Form.Control type="text" name='image' defaultValue={this.props.image} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Edit description</Form.Label>
                                <Form.Control type="text" name='Description' defaultValue={this.props.Description} />
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.closeModel}>Close</Button>
                                <Button variant="primary" type='submit'>Update</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default UpdateFromModel;