import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenu } from '../actions/actionMenu'
import {Carousel, Card} from 'react-bootstrap'
import '../App.css'
import Navigationbar from './navbar'


export default function Menus() {

     const dispatch = useDispatch()
    const datas = useSelector(state => state.menuReducer.datas)
    const loading = useSelector(state => state.menuReducer.loading)


     useEffect(() => {
        dispatch(getMenu());
      },[dispatch]);
      console.log(datas, "did we ?");

    return (
        <div>

         <Navigationbar/>
{/* *****************Carousel ******************** */}

  
        <Carousel >
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="imgs/carous2.jpg"
            alt="First slide"
            />
            <Carousel.Caption >
            <h3>Discover your taste</h3>
            <p>We belive good food offer great smile</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src="imgs/carous1.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Discover your taste</h3>
            <p>We belive good food offer great smile</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="imgs/carous3.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Discover your taste</h3>
            <p>We belive good food offer great smile</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            
            
            <h1 className="py-5 container">Liste des menus</h1>
            
            <div className="pb-5 d-flex justify-content-around">
            {datas.map((el,key) => (
            <Card className="  text-white" key={key}>
                <Card.Img src={el.imgUrl} alt="Card image" className="imageMenu" />
                <Card.ImgOverlay>
                    <Card.Title><h3>{el.nom}</h3></Card.Title>
                    <Card.Text className="mt-5  ">
                     <p className="text-align-center"> {el.description}</p>
                      <button type="button" class="btn btn-outline-danger p-3">Order Now</button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            ))}
            </div>
            
            {/* 
            <div>
                <h2>{el.nom}</h2>
                <p>{el.description}</p>
                <h3>{el.imgUrl}</h3>
            </div>
          
            </div> */}

        </div>
    )
}