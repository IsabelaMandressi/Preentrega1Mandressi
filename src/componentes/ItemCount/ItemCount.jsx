import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador ] = useState(initial)

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
            <button onClick = {()=> onAdd(contador)} disabled = {stock < 1 ? true : false} >Agregar al carrito</button>
            <button onClick = {mostrarCarrito}>
                {mostrar ? "Ocultar carrito":"Ver carrito"}
            </button>
            {
                mostrar ? <h2>Carrito</h2>: null
            }

            <h1>{contador}</h1>

            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount