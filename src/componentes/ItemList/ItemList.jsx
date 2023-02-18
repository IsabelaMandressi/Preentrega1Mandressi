import React from 'react'
import ProdCard from '../ProdCard/ProdCard'




const ItemList = ({items}) => {

    return (
        <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-evenly" }}>
            {
                items.map((element) => {
                    return <ProdCard key={element.id} element = {element}/>
                })
            }
        </div>

    )
}

export default ItemList