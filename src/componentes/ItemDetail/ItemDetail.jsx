import { useContext } from "react";
import { CartContext } from "../../context/Cartcontext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from 'sweetalert2'
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {

        const {addToCart, getQuantityById} = useContext(CartContext)

        const onAdd = (cantidad) => {
            const obj = {
                ...producto,
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

        const quantity = getQuantityById(producto.id)

    return (
        <div>
            <div className="detailCard" style={{ paddingBottom: "100px" }}>
                <img src={producto.img} alt="imagenProducto" className="detailImg"/>
                <h1>{producto.nombre}</h1>
                <h2>${producto.precio}</h2>
            </div>
            <ItemCount
            stock={producto.stock}
            onAdd = {onAdd}
            initial={quantity}
            />
        </div>

    );
};

export default ItemDetail;
