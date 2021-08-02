import React, {useState, useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {newMenu, getMenu, deleteMenu} from '../actions/actionMenu'
import {Form,Button, Card, Container, Row, Col} from 'react-bootstrap'
import UpdateMenu from './updateMenu';





//  const AddNewMenu = () => {
 export default function Dashboard() {
     const initialMenuState = {
        nom: "",
        imgUrl: "",
        description: "",
     };
     

     

    const [menu, setMenu] = useState(initialMenuState);
    // const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch()
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMenu({
            ...menu,
            [name]: value
        });
        console.log("add new menu", menu)
    };
     
    const saveMenu = () => {
        const { nom, imgUrl, description } = menu;

      dispatch(newMenu(nom, imgUrl,description))
            //   setSubmitted(true);
            // .then(data => {
            //     setMenu({
                    
            //         nom: data.title,
            //         imgUrl: data.imgUrl,
            //         description: data.description,
                
            //     });
          
            //     setSubmitted(true);

            //     console.log("hhhhhhhh",data);
            // })
            // .catch(e => {
            //     console.log(e);
            // });
    };
 
 

    const datas = useSelector(state => state.menuReducer.datas)
          useEffect(() => {
        dispatch(getMenu());
      },[dispatch]);
      console.log(datas, "get the cards");
     
     const deleteItem = (id) => {
         dispatch(deleteMenu(id))
         console.log("salut",id)
     }

    return (
        <div className="submit-form my-5">
 
          
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text"  id="nom" value={menu.nom} onChange={handleInputChange} name="nom" placeholder="Enter the name of dish " />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Control type="text" id="imgUrl" value={menu.imgUrl} onChange={handleInputChange} name="imgUrl" placeholder="Enter the url image" />
                                </Form.Group>
                            
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" id="description" value={menu.description} onChange={handleInputChange} name="description" placeholder="Description" />
                                </Form.Group>
                            
                                <button onClick={()=>saveMenu()} className="btn btn-success"> 
                                    Add new menu
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            

        {/*************** get cards ***********/}
            <div className="py-5 d-flex justify-content-around container">
            {datas.map((el,key) => (
            <Card className="  text-white" key={key}>
                <Card.Img src={el.imgUrl} alt="Card image" className="imageMenu" />
                <Card.ImgOverlay>
                    <Card.Title><h3>{el.nom}</h3></Card.Title>
                    <Card.Text className="mt-5  ">
                     <p className="text-align-center"> {el.description}</p>
                            <button type="button" class="btn btn-outline-danger p-3">Order Now</button>
                            <div className="py- d-flex justify-content-around">
                                <UpdateMenu />
                                <Button onClick={() => deleteItem(el._id)}><i class="far fa-trash-alt"></i></Button>
                            </div>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            ))}
            </div>
        </div>
                
    )
    

}

