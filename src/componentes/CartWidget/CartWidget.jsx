import { useContext } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import {Link} from "react-router-dom"
import { CartContext } from '../../context/Cartcontext';

const CartWidget = () => {
    const {getTotalItems} = useContext(CartContext)
    return (
        <Link to="/Cart">
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"stretch",
                marginLeft:"2em"}}>
                <p style = {{fontSize:"0.6em"}}>{getTotalItems()}</p>
                <TiShoppingCart style={{color:"white"}}/>
            </div>
        </Link>

    )
}

export default CartWidget