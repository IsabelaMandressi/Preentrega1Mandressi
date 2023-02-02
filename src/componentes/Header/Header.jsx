import Navbar from "../Navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget"

//import NavbarBackground from "./prints.jpg"
//import logo from "./logo.png"

const Header = () => {
    return (
        <div class = "encabezado" style={{ 
                display: "flex", 
                width: "100%", 
                height: "20vh", 
                justifyContent: "space-around", 
                alignItems: "center",
                backgroundColor: "palevioletred" }}>
            <img src="../img/logo.jpg" alt="logo" height="20vh" />
            <Navbar />
        </div>
    )
}

export default Header