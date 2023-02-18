import ListNavbar from "../ListNavbar/ListNavbar"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div style={{ 
            display: "flex", 
            flexDirection:"row",
            justifyContent: "space-between", 
            alignItems: "center" }}>
            <ul style={{display: "flex", 
            flexDirection:"row",
            justifyContent:"space-between", width:"20em"}}>
                <Link to="/catalogo">
                    <ListNavbar title="Catálogo" />
                </Link>
            </ul>
            <CartWidget/>
        </div>

    )
}

export default Navbar