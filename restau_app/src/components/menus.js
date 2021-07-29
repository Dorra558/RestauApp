import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenu } from '../actions/actionMenu'
import '../App.css'


export default function Menu() {

    const dispatch = useDispatch()
    const menus = useSelector(state => state.servicestore)


    useEffect(() => {
        dispatch(getMenu());
    }, []);
    console.log(menus, "did we ?");



    function Menus() {
        return (
            <div>
                <h1>Our offered menus</h1>
                <div class="row pt-4 offer">
                    <div class="col-md-4">
                        <div class="card  text-white">
                            <img src="" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h3 class="card-title text-center text-white py-2">Authentic</h3>
                                <div class="card-text text-center">
                                    <p>hgdvlkfd vhdbnbklgknghfgvdvjkb,lmlgkfj</p>
                                    <button type="button" class="btn btn-outline-danger p-3">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}