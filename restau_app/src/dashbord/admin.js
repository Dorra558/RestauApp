import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {newMenu} from '../actions/dashboardAction'
import {Form,Button, Container, Row, Col} from 'react-bootstrap'



// const AddNewMenu = () => {
export default function Dashboard() {
    const initialMenuState = {
        id: null,
        nom: "",
        description: "",
        imgUrl: "",
        published: false
    };
    const [menu, setMenu] = useState(initialMenuState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch()
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setMenu({
            ...menu,
            [name]: value
        });
        console.log("add new menu",menu)
    };
    const saveMenu = () => {
        const { nom, imgUrl, description } = menu;

        dispatch(newMenu(nom, description, imgUrl))
            .then(data => {
                setMenu({
                    id: data.id,
                    nom: data.title,
                    description: data.description,
                    imgUrl: data.imgUrl,
                    published: data.published
                });
          
                setSubmitted(true);

                
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const addMenu = () => {
        setMenu(initialMenuState);
        setSubmitted(false);
    };
        

  
    return (
        <div className="submit-form my-5">
 
            {submitted ? (
                    
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={addMenu}>
                        Add
                    </button>
                </div>
            ) : (
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" id="nom" value={menu.nom} onChange={handleInputChange} name="nom" placeholder="Enter the name of dish " />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" id="urlImg" value={menu.urlImg} onChange={handleInputChange} name="urlImg" placeholder="Enter the url image" />
                                </Form.Group>
                            
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" id="description" value={menu.description} onChange={handleInputChange} name="description" placeholder="Description" />
                                </Form.Group>
                            
                                <button onClick={saveMenu} className="btn btn-success">
                                    Add new menu
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
                
    )
    

}

