import Navbar from "../Navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget"

//import NavbarBackground from "./prints.jpg"
//import logo from "./logo.png"

import logoImg from "../../img/logo.png"
const Header = () => {
    return (
        <div style={{ 
                display: "flex", 
                width: "100%", 
                height: "20vh", 
                justifyContent: "space-evenly", 
                alignItems: "center",
                backgroundColor: "black" }}>
                <img src= {logoImg} alt="logo" height="131vh" />
            <Navbar />
        </div>
    )
}

export default Header