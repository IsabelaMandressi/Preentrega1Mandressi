import { TiShoppingCart } from 'react-icons/ti';

const CartWidget = () => {
    let carrito = 0;
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"stretch"
        }}>
            <p style = {{fontSize:"0.6em"}}>{carrito}</p>
            <TiShoppingCart/>
        </div>

    )
}

export default CartWidget