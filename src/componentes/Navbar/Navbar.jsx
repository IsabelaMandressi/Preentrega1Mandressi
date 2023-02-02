import ListNavbar from "../ListNavbar/ListNavbar"
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {

    return (
        <div style={{ 
            display: "flex", 
            flexDirection:"row",
            justifyContent: "space-between", 
            alignItems: "center" }}>
            <ul style={{display: "flex", 
            flexDirection:"row",
            justifyContent:"space-between"}}>
                <ListNavbar title="Prendas" />
                <ListNavbar title="Accesorios" />
                <ListNavbar title="Prints" />
            </ul>
            <CartWidget/>
        </div>

    )
}

export default Navbar