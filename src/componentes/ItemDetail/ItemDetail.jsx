import { useContext } from "react";
import { CartContext } from "../../context/Cartcontext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from 'sweetalert2'
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {

        const {addToCart, getQuantityById} = useContext(CartContext)

        const onAdd = (cantidad) => {
            const obj = {
                ...product,
                quantity:cantidad

            };

            addToCart(obj)
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            })
        }

        const quantity = getQuantityById(product.id)

    return (
        <div>
            <div className="detailCard" style={{ paddingBottom: "100px" }}>
                <img src={product.img} alt="imagenProducto" className="detailImg"/>
                <h1>{product.nombre}</h1>
                <h2>${product.precio}</h2>
            </div>
            <ItemCount
            stock={product.stock}
            onAdd = {onAdd}
            initial={quantity}
            />
        </div>

    );
};

export default ItemDetail;
