import React from 'react'
import "./ProdCard.css"
import {Link} from "react-router-dom"




const ProdCard = ({element}) => {
    return (
        <Link to={`/ItemDetail/${element.id}`}>
        <div key={element.id} className="productCard">
            <img src={element.img} alt="imagenProducto" />
            <h2 className='nombre'>{element.nombre}</h2>
            <h3 className='precio'>${element.precio}</h3>
        </div>
        </Link>
    )
}

export default ProdCard