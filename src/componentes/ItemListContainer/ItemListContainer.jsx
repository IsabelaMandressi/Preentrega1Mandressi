import { BeatLoader } from "react-spinners";
import { useState, useEffect, } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { db } from "../../FirebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"



const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
}


const ItemListContainer = () => {

    const { categoryName } = useParams();
    const [items, setItems] = useState([])

    useEffect(() => {

        const itemCollection = collection(db, "productos")

        if (categoryName) {

            const q = query(itemCollection, where("categoria", "==", categoryName))

            getDocs(q)
                .then((res) => {
                    const productos = res.docs.map(producto => {
                        return {
                            ...producto.data(),
                            id: producto.id
                        }
                    })

                    setItems(productos)
                })
                .catch((err) => console.log("error: " + err))



        } else {

            getDocs(itemCollection)
                .then((res) => {
                    const productos = res.docs.map(producto => {
                        return {
                            ...producto.data(),
                            id: producto.id
                        }
                    })

                    setItems(productos)
                })
                .catch((err) => console.log("error: " + err))

        }
    }, [categoryName])


    return (
        <>
            <BeatLoader
                color={"pink"}
                loading={items.length < 10}
                cssOverride={override}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer