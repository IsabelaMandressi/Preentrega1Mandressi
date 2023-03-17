import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../productos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})


    useEffect(() => {

        let productSelected = products.find(prod => prod.id === Number(id))

        setProduct(productSelected)

    }, [id])




    return (
        <ItemDetail product={product}/>
    )
}



export default ItemDetailContainer