import { useState, useContext } from 'react'
import FormCart from '../FormCart/FormCart'
import { CartContext } from '../../context/Cartcontext'

const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext)

  const [buy, setBuy] = useState(false)

  return (
    <div>
      {
        !buy ? (
        <div>
          <h1>Carrito de compras</h1>
          {
            cart.map(item => {
              return <div key={item.id}>
                <img src={item.img} alt="imagenProducto" />
                <h3>{item.nombre}</h3>
                <h3>${item.precio}</h3>
                <button onClick={() => deleteProductById(item.id)}>Eliminar del carrito</button>

              </div>
            })
          }
          <h2>Total ${getTotalPrice()}</h2>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={()=>setBuy(true)}>Finalizar compra</button>
        </div>) : <FormCart cart={cart} total={getTotalPrice} clearCart={clearCart}/>
      }
    </div>
  )
}

export default Cart