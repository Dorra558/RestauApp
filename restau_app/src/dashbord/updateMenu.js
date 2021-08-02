import React,{useState} from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

function UpdateMenu() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
               <i class="far fa-edit "></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text"  id="nom"  name="nom" placeholder="Enter the name of dish " />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" id="imgUrl"  name="imgUrl" placeholder="Enter the url image" />
                                </Form.Group>
                            
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" id="description"  name="description" placeholder="Description" />
                                </Form.Group>
                            
                                <button  className="btn btn-success"> 
                                  Edit
                                </button>
                            </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

                </Modal.Footer>
                </Modal>
            
        </div>
    )
}

export default UpdateMenu
