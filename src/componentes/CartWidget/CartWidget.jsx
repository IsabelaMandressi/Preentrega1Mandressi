import { TiShoppingCart } from 'react-icons/ti';
import {Link} from "react-router-dom"

const CartWidget = () => {
    let carrito = 0;
    return (
        <Link to="/cart">
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"stretch",
                marginLeft:"2em"}}>
                <p style = {{fontSize:"0.6em"}}>{carrito}</p>
                <TiShoppingCart style={{color:"white"}}/>
            </div>
        </Link>

    )
}

export default CartWidget