import React from 'react'
import "./item.css";
import { Link } from "react-router-dom"

function Item(props) {
    const { img, name, price, dues, id, offer } = props;
    const urlDetalle = `/terrarios/${id}`

    let styleItemPrice = {
        color: offer ? "#00FFAB" : "rgb(255, 255, 255)"
    }

    let classPrice = `priceTag ${offer && "offerTag"}`


    return (
        <div className='itemCard'>
            <div className='cardImg'>
                <img src={img} className='cardImgTop' alt="carImg" />
            </div>
            <div className='cardBody'>
                <h5 className='cardName'>{name}</h5>
                <h5 className={classPrice}>${price}</h5>
                <Link to={urlDetalle}>
                    <h6 className='cardTextSeeMore'>Ver Mas</h6>
                </Link>
            </div>
        </div>
    )
}

export default Item