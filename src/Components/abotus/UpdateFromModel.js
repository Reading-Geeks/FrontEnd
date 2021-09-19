import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
class UpdateFromModel extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="title">update About Us  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>edit Book</Form.Label>
                                <Form.Control type="text" name='Name' defaultValue={""} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>edit description</Form.Label>
                                <Form.Control type="text" name='description' defaultValue={""} />
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.show}>Close</Button>
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