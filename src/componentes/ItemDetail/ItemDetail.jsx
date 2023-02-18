import "./ItemDetail.css"

const ItemDetail = ({ product }) => {


    return (
        <div className="detailCard">
            <div className="detailCard" style={{ paddingBottom: "100px" }}>
                <img src={product.img} alt="imagenProducto" className="detailImg"/>
                <h1>{product.nombre}</h1>
                <h2>${product.precio}</h2>
            </div>
        </div>
    );
};

export default ItemDetail;
