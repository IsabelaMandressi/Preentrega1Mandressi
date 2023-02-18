
import { useState } from 'react'
import { useEffect } from 'react'
import { products } from '../../productos'
import ItemList from '../ItemList/ItemList'




const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const productos = new Promise((resolve, reject) => {
            resolve(products)
        })
        productos
            .then((res) => {
                setItems(res)
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])


    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer