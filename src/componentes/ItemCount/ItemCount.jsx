import { useEffect, useState } from "react"
import Cart from "../Cart/Cart"






const ItemCount = ({stock, initial=1, onAdd}) => {
    
        

    const [contador, setContador ] = useState(initial)

    useEffect(()=>{setContador(initial)}, [initial])

    const sumar = () => {
        if(contador < stock)
        setContador(contador + 1)
    }
    const restar = () => {
        if(contador > 0)
        setContador(contador - 1)
    }
    const[mostrar, setMostrar] = useState(false)
    const mostrarCarrito = ()=> {
        setMostrar(!mostrar)
    }

    return (
        <div>
            <h2>Cantidad: {contador}</h2>
            <button onClick = {()=> onAdd(contador)} disabled = {stock < 1 ? true : false} >Agregar al carrito</button>
            <button onClick = {mostrarCarrito}>
                {mostrar ? "Ocultar carrito":"Ver carrito"}
            </button>

            {
                mostrar ? <Cart/>: null
            }

            <h1>{contador}</h1>

            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount