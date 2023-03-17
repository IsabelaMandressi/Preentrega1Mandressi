import { useContext} from 'react'
import { CartContext } from '../../context/Cartcontext'

const Cart = () => {

  const {cart, clearCart, deleteProductById, getTotalPrice} = useContext(CartContext)


  return (
    <div>
      <h1>Carrito de compras</h1>
      {
        cart.map(item =>{
          return <div key={item.id}>
            <img src={item.img} alt="imagenProducto" />
            <h3>{item.nombre}</h3>
            <h3>${item.precio}</h3>
            <button onClick={()=>deleteProductById(item.id)}>Eliminar del carrito</button>
            
          </div>
        })
      }
      <h2>Total ${getTotalPrice()}</h2>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
    
  )
}

export default Cart